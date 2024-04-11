fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1490772888775-55fceea286b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI4NDE0MDR8&ixlib=rb-4.0.3&q=85)`

        document.getElementById("author").textContent = `By: Marivi Pazos`
    })
    