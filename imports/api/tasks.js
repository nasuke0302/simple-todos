import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Categories } from './categories'

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('tasks.all', function () {
        return Tasks.find()
    });

    Meteor.publish('tasks.byCategoryName', function (category) {
        return Tasks.find({ category })
    });
}

Meteor.methods({
    'tasks.insert'({ text, date, category }) {
        check(text, String);
        check(category, String);

        Tasks.insert({ text, date, category, createdAt: new Date(), checked: false });

        Categories.update({ name: category }, { $inc: { taskCount: 1 } });
    },
    'tasks.remove'(taskId) {
        check(taskId, String);

        const task = Tasks.findOne({ _id: taskId });

        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.remove({ _id: taskId });
    },
    'tasks.setChecked'(_id, checked) {
        check(_id, String);
        check(checked, Boolean);

        Tasks.update({ _id }, { $set: { checked: !checked } });
    },
    'tasks.setPrivate'(taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Tasks.findOne({ _id: taskId });

        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Tasks.update({ _id: taskId }, { $set: { private: setToPrivate } });
    },
});