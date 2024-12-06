// NODE MODULES
import { Client, Account, Avatars } from 'appwrite';

// INTIALIZE APPWRITE
const client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
.setEndpoint('https://cloud.appwrite.io/v1');

// INITIALIZE APPWRITE ACCOUNT
const account = new Account(client);

// INITIALIZE APPWRITE AVATARS
const avatars = new Avatars(client);

export { account, avatars };