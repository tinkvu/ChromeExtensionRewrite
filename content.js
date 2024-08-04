chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { text } = request;

  // Call Gemini API with the text and the desired prompt
  fetch('https://your-gemini-api-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${YOUR_API_KEY}`
    },
    body: JSON.stringify({
      prompt: `Rewrite the following text: ${text}`,
      // Add other parameters as needed
    })
  })
  .then(response => response.json())
  .then(data => {
    sendResponse({ rewrittenText: data.result });
  })
  .catch(error => {
    console.error('Error:', error);
    sendResponse({ error: 'Gemini API error' });
  });

  return true; // Keep the message channel open
});
