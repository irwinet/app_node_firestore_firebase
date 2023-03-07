const { db } = require('./firebase')

async function quickstart() {
    await db.collection('Task').add({
        creado: new Date(),
        description: 'Test 2',
        done: false
    });
    
    const querySnapshot = await db.collection('Task').get();
    const taks = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    console.log(taks)
}

quickstart()