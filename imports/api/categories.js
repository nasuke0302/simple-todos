import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');

if (Meteor.isServer) {
    Meteor.publish('categories.all', function () {
        return Categories.find();
    });
    Meteor.publish('categories.byId', function (_id) {
        return Categories.find({ _id });
    });


    const createInitialCategories = () => {
        const initCats = [
            { name: 'work', taskCount: 0, icon: 'briefcase', iconColor: '#fad56e' },
            { name: 'travel', taskCount: 0, icon: 'plane-departure', iconColor: '#6efa91' },
            { name: 'music', taskCount: 0, icon: 'headphones', iconColor: '#fa6e6e' },
            { name: 'study', taskCount: 0, icon: 'book', iconColor: '#d96efa' },
            { name: 'home', taskCount: 0, icon: 'home', iconColor: '#faa66e' },
            { name: 'shopping', taskCount: 0, icon: 'shopping-cart', iconColor: '#6ea4fa' },
        ]
        initCats.map(cat => Categories.upsert({ name: cat.name }, cat));
    }

    if (Categories.find().count() === 0) createInitialCategories()
}