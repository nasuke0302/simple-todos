import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');


if (Meteor.isServer) {
    Meteor.publish('tasks.all', function () {
        return Tasks.find({ owner: this.userId })
    });
}


Meteor.methods({
    'tasks.insert'(text) {
        check(text, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.insert({
            text,
            createdAt: new Date(),
            owner: this.userId,
            username: Meteor.users.findOne({ _id: this.userId }).username,
        });
    },
    'tasks.remove'(taskId) {
        check(taskId, String);

        const task = Tasks.findOne({ _id: taskId });

        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.remove({ _id: taskId });
    },
    'tasks.setChecked'(taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);

        const task = Tasks.findOne({ _id: taskId });
        if (task.private && task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.update({ _id: taskId }, { $set: { checked: setChecked } });
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