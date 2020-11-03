import { 
  //IonAvatar, 
  IonButton, 
  IonContent, 
  IonHeader, 
  // IonIcon, 
  // IonInput, 
  // IonItem, 
  // IonItemOption, 
  // IonItemOptions, 
  // IonItemSliding, 
  // IonLabel, 
  // IonList, 
  IonPage, 
  // IonText, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
//import {star} from 'ionicons/icons'

// const data = [
//   {name: 'Finn', desc: 'This guy rocks!'},
//   {name: 'Han', desc: 'This guy rocks!'},
//   {name: 'Rey', desc: 'This guy rocks!'}
// ]

const Home: React.FC = () => {

  const [name, setName] = useState<string>('')

  useEffect(() => {
    console.log(name)
  }, [name])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best app ever!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register" color="secondary">Register</IonButton>
        {/* <IonList>
            {/* LIST */}
            {/* {Array(10).fill(0).map((_, i) => (
              <IonItem key={i}>
                <IonText>List Item {i}</IonText>
              </IonItem>
            ))} */}

            {/* SLIDING LIST */}
            {/* {data.map(elem => (
              <IonItemSliding>
                <IonItem>
                  <IonAvatar>
                    <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`} />
                  </IonAvatar>
                  <IonLabel className="ion-padding">
                    <p>{elem.name}</p>
                    <p>{elem.desc}</p>
                  </IonLabel>
                </IonItem>

                <IonItemOptions side="start">
                  <IonItemOption onClick={() => alert('Deleting..')}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>  
            ))} 
            
          
        </IonList> */}

        {/* 
        BUTTON
        <IonButton color="secondary" expand="full">
          <IonIcon slot="start" icon={star}></IonIcon>
          HelloWorld!
        </IonButton> */}
        
        {/* 
        INPUT
        <IonInput value={name} onIonChange={(e: any) => setName(e.target.value)}></IonInput> */}

        {/* 
        ROUTE
        <IonButton routerLink="/example">
          Go
        </IonButton>  */}
      
      </IonContent>
    </IonPage>
  );
};

export default Home;
