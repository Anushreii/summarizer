// const form = document.getElementById('summarizeForm');
// const summaryText = document.getElementById('summaryText');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const url = document.getElementById('url').value;

//   summaryText.textContent = 'Summarizing... Please wait.';

//   try {
//     const response = await fetch('https://api.rapidapi.com/summarize', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-RapidAPI-Host': 'text-summarization-api.p.rapidapi.com',
//         'X-RapidAPI-Key': 'https://text-summariser2.p.rapidapi.com/summariser', // Replace with your RapidAPI key
//       },
//       body: JSON.stringify({ url }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch summary.');
//     }

//     const data = await response.json();
//     summaryText.textContent = data.summary || 'No summary available for this article.';
//   } catch (error) {
//     summaryText.textContent = `Error: ${error.message}`;
//   }
// });


const url = 'https://text-summariser2.p.rapidapi.com/summariser';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e3ce989161msh78cf84628ac4f9ap11957bjsn3059bc988d7e',
		'x-rapidapi-host': 'text-summariser2.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
