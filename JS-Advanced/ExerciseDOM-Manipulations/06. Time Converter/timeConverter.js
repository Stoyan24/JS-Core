function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', daysConventor);
    document.getElementById('hoursBtn').addEventListener('click', hoursConvetor);
    document.getElementById('minutesBtn').addEventListener('click', minutesConventor);
    document.getElementById('secondsBtn').addEventListener('click', secondsConventor);

    function daysConventor() {
        hours.value = Number(days.value)*24;
        minutes.value = (Number(days.value)*24)*60;
        seconds.value = ((Number(days.value)*24)*60)*60;

    }

    function hoursConvetor() {
        days.value = Number(hours.value)/24;
        minutes.value = Number(hours.value)*60;
        seconds.value = Number((hours.value)*60)*60;
    }

    function minutesConventor() {
        days.value = Number((minutes.value)/60)/24;
        hours.value = Number(minutes.value)/60;
        seconds.value = Number(minutes.value)*60;
    }

    function secondsConventor() {
        days.value = ((Number(seconds.value)/60)/60)/24;
        hours.value = (Number(seconds.value)/60)/60;
        minutes.value = Number(seconds.value)/60;
    }

}