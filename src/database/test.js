const Database = require('./db')
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {

    // INSERIR DADOS NA TABELA
    // await saveOrphanage(db, {
    //     lat: "-9.0716449",
    //     lng: "-44.3620314",
    //     name: 'Lar esperançoso',
    //     about: "Presta assistência a crianças de 06 a 15 anos que seencontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "98943454",
    //     images: [
    //         "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.4.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF8",
    //         "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/photo-1600063296677-1bb44cd2c615?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 10h até 15h ",
    //     open_on_weekends: "1"
    // })

    // CONSULTAR DADOS NA TABEL
    // const selectedOrphanages = await db.all(" SELECT *  FROM  orphanages")
    // console.log(selectedOrphanages)

    // / CONSULTAR somente 1 orphanato, pelo id 
    // const orphanage = await db.get('SELECT * FROM orphanages WHERE id= "21"')
    // console.log(orphanage)
    // console.log(await db.run('DELETE  FROM orphanages WHERE id= "20" '))
    // console.log(await db.run('DELETE  FROM orphanages WHERE id= "19" '))
    // console.log(await db.run('DELETE  FROM orphanages WHERE id= "17" '))
    // console.log(await db.run('DELETE  FROM orphanages WHERE id= "18" '))
    // deletar dados da TABELA
    // console.log(await db.run("DELETE FROM orphanages "))

})