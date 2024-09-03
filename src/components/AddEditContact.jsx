
import React, { useState, useEffect } from 'react';


function AddEditContact({ addContact, updateContact, closeModal, editContact }) {
     const [name, setName] = useState("");
     const [surname, setSurname] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");

     useEffect(() => {
       if (editContact) {
         setName(editContact.name);
         setSurname(editContact.surname);
         setEmail(editContact.email);
         setPhone(editContact.phone);
       }
     }, [editContact]);

     const handleSubmit = (e) => {
       e.preventDefault();
       if (editContact) {
         updateContact({ name, surname, email, phone });
       } else {
         addContact({ name, surname, email, phone });
       }
       resetForm();
     };

     const resetForm = () => {
       setName("");
       setSurname("");
       setEmail("");
       setPhone("");
       closeModal();
     };
  return (
    <div className="modal">
      <h2>{editContact ? 'ویرایش مخاطب' : 'افزودن مخاطب جدید'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="شماره تلفن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">{editContact ? 'به روز رسانی' : 'اضافه کردن'}</button>
        <button type="button" onClick={resetForm}>بستن</button>
      </form>
    </div>
  );
  
}

export default AddEditContact