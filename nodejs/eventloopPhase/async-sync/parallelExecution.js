async function fetchMultipleUrls(urls) {
    // Start all requests in parallel (non-blocking)
    const promises = urls.map(url => 
      fetch(url).then(res => res.json())
    );
    
    // Wait for all to complete (async handling)
    return Promise.all(promises);
  }
  
  // Usage
  fetchMultipleUrls(['/api/user/1', '/api/user/2'])
    .then(results => console.log(results))
    .catch(err => console.error('Failed:', err));