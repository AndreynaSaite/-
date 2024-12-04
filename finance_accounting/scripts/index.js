document.addEventListener('DOMContentLoaded', function () {


    const queues = {
        1: [],
        2: [],
        3: [],
        4: []
    };


    function addToQueue(data) {
        const cabinet_id = data.cabinet;
        if (queues[cabinet_id]) {
            queues[cabinet_id].push(data);
            console.log(queues);
        }
    }


    async function requestTicket(cabinet_id) {
        const response = await fetch(`/api/create-ticket/${cabinet_id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        //data - данные ответа
        const data = await response.json();
        addToQueue(data);
        console.log(data);
    }

    document.querySelector('.tickets button[name="add1"]').addEventListener('click', function () {
        const line = 1;
        requestTicket(line);
    });

    document.querySelector('.tickets button[name="add2"]').addEventListener('click', function () {
        const line = 2;
        requestTicket(line);
    });

    document.querySelector('.tickets button[name="add3"]').addEventListener('click', function () {
        const line = 3;
        requestTicket(line);
    });

    document.querySelector('.tickets button[name="add4"]').addEventListener('click', function () {
        const line = 4;
        requestTicket(line);
    });

});
