import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Player } from 'video-react';


export const Home = () => (
  <div>
  <Player>
   <source src="/assets/volansvid.mp4" />
 </Player>
  </div>

)
