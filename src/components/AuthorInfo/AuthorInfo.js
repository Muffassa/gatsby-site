import React from 'react';
import avatar from './avatar.jpg';


const AuthorInfo = () => (
  <div style={{
      display: 'flex',
      margin: '0 auto',
      marginTop: '150px',
      maxWidth: '425px'
    }}>
    <img src={avatar} style={styles.avatar} />
    <div className="text" style={{maxWidth: '300px'}}>20 лет, FrontEnd разработчик, работаю в Омске в <a href="https://livetyping.com">Livetyping</a></div>
  </div>
);

export default AuthorInfo;

const styles = {
  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '100%',
    marginRight: '10px',
    marginBottom: '0',
    marginLeft: '1  50px'
  }
}