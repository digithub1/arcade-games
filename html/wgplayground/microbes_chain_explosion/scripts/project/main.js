import "./libs/jq.js";
runOnStartup(async runtime => {
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime) {
    runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) {
}
globalThis.retrieveLeaderboardData = (username) => {
    const leaderboardsContainer = $("#leaderboard");
    let rows = "";
    leaderboardsContainer.html("<div class='loading'>Connection with server...</div>");
    $.ajax({
        url: `https://microbesgame-default-rtdb.europe-west1.firebasedatabase.app/leaderboards.json?limitToLast=30&orderBy="score"`,
        success: function (result) {
            result = Object.entries(result).sort((a, b) => b[1].score - a[1].score);
            result = Object.fromEntries(result);
            let counter = 0;
            for (const user in result) {
                counter+=1;
                rows += `<tr class="${user === username ? "your-user" : ''}">
                                <td>${counter}. ${user === username ? "YOUR SCORE" : user}</td>
                                <td>${result[user].score}</td>
                            </tr>`;
            }

            leaderboardsContainer.html(`
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                `);
        }
    })
}


globalThis.updateLeaderboardData = (username, score) => {
    $.ajax({
        url: `https://microbesgame-default-rtdb.europe-west1.firebasedatabase.app/leaderboards/${username}.json?`,
        data: JSON.stringify({"score": score}),
        method: "PATCH",
        success: (result) => {
        }
    })
}
$(document).ready(() => {


});

