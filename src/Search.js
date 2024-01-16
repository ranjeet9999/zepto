// import React, { useState } from 'react';
// import './TagsInput.css'; // Import your CSS file

// const TagsInput = () => {
//   const initialNames = [
//     { name: 'John', logo: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', emailId: 'john@email.com' },
//     { name: 'Jane', logo: 'jane-logo-url', emailId: 'jane@email.com' },
//     // Add other users with logo and emailId
//   ];

//   const [availableNames, setAvailableNames] = useState(initialNames);
//   const [selectedNames, setSelectedNames] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isTextFieldClicked, setTextFieldClicked] = useState(false);

//   const handleAddName = (user) => {
//     setSelectedNames([...selectedNames, user]);
//     setAvailableNames(availableNames.filter((n) => n !== user));
//     setSearchTerm('');
//   };

//   const handleRemoveName = (user) => {
//     setSelectedNames(selectedNames.filter((n) => n !== user));
//     setAvailableNames([...availableNames, user]);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleTextFieldClick = () => {
//     setTextFieldClicked(true);
//   };

//   return (
//     <div className='search'>
//       <div>
//         {selectedNames.map((user) => (
//           <div key={user.name} className="chip">
//             <img src={user.logo} alt={user.name} className="chip-logo" />
//             {user.name}
//             <button onClick={() => handleRemoveName(user)} className="chip-remove-btn">
//               x
//             </button>
//           </div>
//         ))}

//         <input
//           type="text"
//           placeholder="Add new user..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           onClick={handleTextFieldClick}
//         />
//       </div>
//       <div className="line-between"></div>

//       {isTextFieldClicked && (
//         <div className="tag-input-container">
//           {availableNames
//             .filter((user) =>
//               user.name.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//             .map((user) => (
//               <div key={user.name} onClick={() => handleAddName(user)} className="name-item">
//                 <div className='logo-name'>
//                     <img src={user.logo} alt={user.name} className="item-logo" />
//                     <span>{user.name}</span>
//                 </div>
                
//                 <span>{user.emailId}</span>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TagsInput;

import React, { useState } from 'react';
import './TagsInput.css'; // Import your CSS file

const TagsInput = () => {
  const initialNames = [
    { name: 'John', emailId: 'john@email.com' },
    { name: 'Vinay', emailId: 'Vinay@email.com' },
    { name: 'Ranjeet', emailId: 'Ranjeet@email.com' },
    { name: 'Vikram', emailId: 'Vikram@email.com' },
    { name: 'Praveen', emailId: 'Praveen@email.com' },
    { name: 'Harsha', emailId: 'Harsha@email.com' },
    { name: 'Rohit', emailId: 'Rohit@email.com' },
    // Add other users without logo
  ];

  const [availableNames, setAvailableNames] = useState(initialNames);
  const [selectedNames, setSelectedNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTextFieldClicked, setTextFieldClicked] = useState(false);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleAddName = (user) => {
    setSelectedNames([...selectedNames, user]);
    setAvailableNames(availableNames.filter((n) => n !== user));
    setSearchTerm('');
  };

  const handleRemoveName = (user) => {
    setSelectedNames(selectedNames.filter((n) => n !== user));
    setAvailableNames([...availableNames, user]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTextFieldClick = () => {
    setTextFieldClicked(true);
  };

  return (
    <div className='search'>
      <div>
        {selectedNames.map((user) => (
          <div key={user.name} className="chip">
            <div
              className="chip-letter"
              style={{ backgroundColor: getRandomColor() }}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
            {user.name}
            <button onClick={() => handleRemoveName(user)} className="chip-remove-btn">
              x
            </button>
          </div>
        ))}

        <input
          type="text"
          placeholder="Add new user..."
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={handleTextFieldClick}
        />
      </div>
      <div className="line-between"></div>

      {isTextFieldClicked && (
        <div className="tag-input-container">
          {availableNames
            .filter((user) =>
              user.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((user) => (
              <div key={user.name} onClick={() => handleAddName(user)} className="name-item">
                <div className='logo-name'>
                    <div className="item-letter" style={{ backgroundColor: getRandomColor() }}>
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span>{user.name}</span>
                </div>
                
                <span>{user.emailId}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TagsInput;
