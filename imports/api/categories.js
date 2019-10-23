import { Mongo } from 'meteor/mongo';

export const Categories = new Mongo.Collection('categories');

if (Meteor.isServer) {
    Meteor.publish('categories.all', function () {
        return Categories.find();
    });


    const createInitialCategories = () => {
        const initCats = [
            { name: 'travel', taskCount: 0 },
            { name: 'work', taskCount: 0 },
            { name: 'music', taskCount: 0 },
            { name: 'study', taskCount: 0 },
            { name: 'home', taskCount: 0 },
            { name: 'shopping', taskCount: 0 },
        ]
        initCats.map(cat => Categories.insert(cat));
    }
    
    if (Categories.find().count() === 0) createInitialCategories()
}