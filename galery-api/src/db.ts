import { connect } from 'mongoose';

export async function startConn() {
    await connect('mongodb://localhost/photo-app-db',{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Database is connected.');
}

