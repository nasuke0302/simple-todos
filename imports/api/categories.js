import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');


if (Meteor.isServer) {
    Meteor.publish('categories.all', function () {
        return Categories.find();
    });

    if (Categories.find().count() === 0) {
        createInitialCategories()
    }

    const createInitialCategories = () => {
        const initCats = [
            { name: 'travel' },
            { name: 'work' },
            { name: 'music' },
            { name: 'study' },
            { name: 'home' },
            { name: 'shopping' },
        ]
        initCats.map(cat => Categories.insert(cat));
    }
}