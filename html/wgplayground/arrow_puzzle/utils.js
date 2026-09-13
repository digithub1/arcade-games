function OpenFilesDialog() {
    const input = document.getElementById("fileInput");
    input.value = "";
    input.setAttribute("multiple", "");

    input.onchange = async function(event) {
        const files = Array.from(event.target.files);
        if (files.length === 0) {
            JsToDef.send("SelectedFile", "[]")
            return;
        }
        
        const readers = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = (err) => reject(err);
                reader.readAsText(file);
            });
        });

        try {
            const allFilesData = await Promise.all(readers);
            const jsonPayload = JSON.stringify(allFilesData);
            JsToDef.send("SelectedFile", jsonPayload);
        } catch (error) {
            console.error("Error reading files:", error);
        }
       
    };

    input.click();
}
