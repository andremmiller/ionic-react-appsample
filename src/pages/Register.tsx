import {IonPage, IonButton, IonHeader, IonToolbar, IonContent, IonInput, IonTitle, IonLoading } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebase';
import { toast } from '../toast';

const Register: React.FC = () => {
  const [busy, setBusy] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const register = async () => {
    setBusy(true)
    if(password !== cpassword) {
      return toast('Passwords dont match')
    }

    if(username.trim() === '' || password.trim() === '' ) {
      return toast('Username and password required!')
    }

    const res = await registerUser(username, password)
    if(res) {
      toast('Register succesful!')
    }

    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registering.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonInput type="password" placeholder="Coonfirm Password" onIonChange={(e: any) => setCPassword(e.target.value)} />
        <IonButton onClick={register}>Register</IonButton>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;

