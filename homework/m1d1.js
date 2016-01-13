/* 
M1D1 HOMEWORK :

* create a factory function that returns a contact, 
ex: makeContact(id, nameFirst, nameLast);
* make several contacts of your classmates, including their lies.
* use an Array to push yer contacts into a list of contacts.
* BONUS : use a loop to print out all their first and last names, etc.
*/

/* declares the variable ben and assigns the factory function makeContact with 
the arguements ('Ben', 'Bernhard', 'Bruhnke', 'Ben is my real name.')
*/

var ben = makeContact('Ben', 
                      'Bernhard', 
                      'Bruhnke',
                      'Ben is my real name.');

/* declares the variable celeste and assigns the factory function makeContact 
with the arguements ('CC', 'Celeste', 'Carter', 'I like video games!')
*/

var celeste = makeContact('CC', 
                          'Celeste', 
                          'Carter',
                          'I like video games!');

/* declares the variable rush and assigns the factory function makeContact 
with the arguements ('Rush', 'Rushing', 'Haise', 'I love advertising!')
*/

var rush = makeContact('Rush', 
                       'Rushing', 
                       'Haise',
                       'I love advertising!');

/* declares the variable blaze and assigns the factory function makeContact 
with no arguements passed into it.
*/

var blaze = makeContact();

/* defines the factory function makeContact() with the parameters 
(id, firstName, lastName, lie) that returns an object with the following 
properties and value keys 
{
 id: id,
 firstName: firstName,
 lastName: lastName,
 lie: lie,
 fullName: firstName + ' ' + lastName,
 contacts: [],
};

*/

function makeContact(id, firstName, lastName, lie) {
  return {
    id: id,
    firstName: firstName,
    lastName: lastName,
    lie: lie,
    fullName: firstName + ' ' + lastName,
    contacts: [],
  };
}

/*pushes the object ben onto an array on the property contacts of the object 
blaze.
*/
  
blaze.contacts.push(ben);

/*pushes the object celeste onto an array on the property contacts of the 
object blaze.
*/
  
blaze.contacts.push(celeste);

/*pushes the object rush onto an array on the property contacts of the 
object blaze.
*/

blaze.contacts.push(rush);

/*inspects the contacts property of the object blaze. Displays the contents 
of the array key value for the property contacts on the object blaze.
*/

console.log(blaze.contacts); 

/*for loop that iterates through the array on the property contacts of the 
object blaze assigning to the variable contacts the array index position 
for the property contacts at each iteration of the loop. Then it inspects 
the property fullName on the objects in the array contacts. Displays the 
value key for the property fullName on the objects ben, celeste, and rush. 
*/

for(var i = 0; i < blaze.contacts.length; i++) {
  var contacts = blaze.contacts[i];
  console.log(contacts.fullName);
}