const rough= async ()=> {
    const call = await fetch('https://anime-chatbot.onrender.com/upsert', {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name:'Hunter x Hunter'})
    })
    console.log(await call.json());
};

rough();