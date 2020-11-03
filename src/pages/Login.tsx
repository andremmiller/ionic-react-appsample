import {IonPage, IonButton, IonHeader, IonToolbar, IonContent, IonInput, IonTitle, IonLoading } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebase'
import { toast } from '../toast';

const Login: React.FC = () => {

  const [busy, setBusy] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    setBusy(true)
    const res = await loginUser(username, password)
    if(res) {
      toast('Logged in!')
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Pelase wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={login}>Login</IonButton>
        <p>Don't have an account? <Link to="/register">Register</Link> </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
