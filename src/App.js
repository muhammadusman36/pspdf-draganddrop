import './App.css';

import document from "./assets/complete.pdf"
import PdfViewerComponent from "./components/PdfViewerComponent"
function App() {
  return (
    <>
      <body>
        <div className="App">
          <div className="PDF-viewer" style={{ width: "100%" }}>
            <PdfViewerComponent
              document={document}
            />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageSelect = (event) => {
//     const selectedImageUrl = event.target.src;
//     setSelectedImage(selectedImageUrl);
//   };

//   const handleImageDragStart = (event, imageUrl) => {
//     event.preventDefault();
//     event.dataTransfer.setData('text/plain', imageUrl);
//     setSelectedImage(imageUrl);
//   };

//   const handleImageDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleImageDrop = (event) => {
//     event.preventDefault();
//     const imageUrl = event.dataTransfer.getData('text/plain');
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div className="App">
//       <div className="images">
//         <img
//           draggable="true"
//           src="https://source.unsplash.com/6w3hF2r9gqk/300x200"
//           onClick={handleImageSelect}
//           onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/6w3hF2r9gqk/300x200')}
//           onDragOver={handleImageDragOver}
//           onDrop={handleImageDrop}
//         />
//         <img
//           draggable="true"
//           src="https://source.unsplash.com/7S9k69vO8ZY/300x200"
//           onClick={handleImageSelect}
//           onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/7S9k69vO8ZY/300x200')}
//           onDragOver={handleImageDragOver}
//           onDrop={handleImageDrop}
//         />
//         <img
//           draggable="true"
//           src="https://source.unsplash.com/kYIrsmX3YIA/300x200"
//           onClick={handleImageSelect}
//           onDragStart={(event) => handleImageDragStart(event, 'https://source.unsplash.com/kYIrsmX3YIA/300x200')}
//           onDragOver={handleImageDragOver}
//           onDrop={handleImageDrop}
//         />
//         {/* Add more image elements here */}
//       </div>
//       <div>
//         <p>Selected Image: {selectedImage}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// // First, get all `FormFields` in the `Document`.
// const formFields = await instance.getFormFields();

// // Filter the form fields to only include signature form fields.
// const signatureFormFields = formFields.filter((formField) => {
//   return formField instanceof PSPDFKit.FormFields.SignatureFormField;
// });

// // Iterate over the signature form fields and perform the desired action.
// signatureFormFields.forEach((signatureFormField) => {
//   // Perform the desired action for each signature form field.
//   console.log(signatureFormField.name);
// });

// PSPDFKit - Annotation - Widget - Signature
