function saveToFile() {
  // Get the content from the text area
  const content = document.getElementById('userInput').value;
  
  // Create a Blob (Binary Large Object) with the content
  const blob = new Blob([content], { type: 'text/plain' });
  
  // Create a URL for the blob
  const url = URL.createObjectURL(blob);
  
  // Create a link element to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my_notes.txt'; // Specify the default file name
  
  // Append the link to the body, click it, and then remove it
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Revoke the object URL to free up memory
  URL.revokeObjectURL(url);
}