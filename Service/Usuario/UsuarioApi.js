async function getData(authToken) {
    const response = await fetch("http://localhost:7127/api/login", {
        method: 'POST',
        headers: { 
            "Content-Type": "application/json", 
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(authToken),
    });
    const data = await response.json();
    console.log(data);
}

getData();

