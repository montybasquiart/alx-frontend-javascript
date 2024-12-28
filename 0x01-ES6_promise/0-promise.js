function getResponseFromAPI() => {
    return new Promise((resolve, rejected)) => {
	setTimeout(() => {
	    const success = true;
	    if (success) {
		resolve("");
	    } else {
		reject("");
	    }
	}, 1000);
    });
}
