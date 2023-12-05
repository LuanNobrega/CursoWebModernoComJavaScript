//Tarefas temporizadas com node-schedule, muita flexibilidade

const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 2', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

//setInterval
//setImmediate

const regra = new schedule.RecurrenceRule()
//Importa dia da semana, de segunda (1) a sexta(5)
regra.dayOfWeek = [new schedule.Range(1, 5)]
//Importa a hora que tem que ser as 16
regra.hour = 16
//Importa os segundos que tem que aos 30
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds());
});
