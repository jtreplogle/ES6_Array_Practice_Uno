    'use strict'

    const people = [
      { name: 'Jason', year: 1976 },
      { name: 'Spencer', year: 2006 },
      { name: 'Ashley', year: 1979 },
      { name: 'Lucy', year: 2015 },
    ];

    const comments = [
      { text: 'Lucy is my dog!', id: 523423 },
      { text: 'My favoite band is the Deftones.', id: 823423 },
      { text: 'You are awesome!', id: 2039842 },
      { text: 'Pizza is my favorite food.', id: 123523 },
      { text: 'Word to your mom.', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear();
    //   if(currentYear - person.year >= 19) {
    //     return true;
    //   }
    // });

    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log({isAdult});
    // Array.prototype.every() // is everyone 19?

    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({allAdults});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423


    const comment = comments.find(comment => comment.id === 823423);

    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // comments.splice(index, 1);

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ];