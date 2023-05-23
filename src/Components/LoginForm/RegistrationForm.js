import { registerUserFunc } from '../../Firebase/Firebase';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
        firstname: firstName,
        name: lastName,
        mail: email,
        country: country,
        city: city,
        phone: phone,
        pass: password
    }

    
    registerUserFunc(user);
    // Effectuer des actions supplémentaires, comme la validation des champs ou l'envoi des données au serveur
  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-80p md:w-full p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="text-gray-700">
              Pays
            </label>
            <input
              type="text"
              id="country"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-700">
              Ville
            </label>
            <input
              type="text"
              id="city"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
