import React, { useState } from "react";
import "./App.css"
import AddEditContact from "./components/AddEditContact";
function App() {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editContact, setEditContact] = useState(null);

  const addContact = (contact) => {
    setContacts(contacts=>[...contacts, contact]);
    setModalOpen(false);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );
    setModalOpen(false);
    setEditContact(null);
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter((contact) => contact.email !== email));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 return (
   <div className="container">
     <div className="form">
       <label htmlFor="#name">جستجو در مخاطبین : </label>
       <input
         id="name"
         type="text"
         placeholder="جستجوی مخاطب"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
       <button
         onClick={() => {
           setModalOpen(true);
           setEditContact(null);
         }}
       >
         افزودن مخاطب
       </button>
     </div>

     <div className="containerList">
       <h3>لیست مخاطبین</h3>
       <ul className="contacts">
         {filteredContacts.map((contact, index) => (
           <li className="item" key={index}>
             {contact.name} {contact.surname} - {contact.email} -{" "}
             {contact.phone}
             <button
               onClick={() => {
                 setEditContact(contact);
                 setModalOpen(true);
               }}
             >
               ویرایش
             </button>
             <button onClick={() => deleteContact(contact.email)}>حذف</button>
           </li>
         ))}
       </ul>
     </div>

     {modalOpen && (
       <AddEditContact
         addContact={addContact}
         updateContact={updateContact}
         closeModal={() => setModalOpen(false)}
         editContact={editContact}
       />
     )}
   </div>
 );
};



export default App;
