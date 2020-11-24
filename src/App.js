import React, { useState } from 'react';
import { play } from 'ionicons/icons';
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonToast,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Your settings have been saved"
          duration={800}
          color="medium"
        />
        <IonButton
          onClick={() => setShowToast(true)}
          expand={true}
          color="primary"
        >
          <IonIcon icon={play} slot="start" />
          Click me
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
