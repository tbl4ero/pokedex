import React from 'react';

import { PageContainer, TypeElement, ProfileElement } from './Profile.styles';

const Profile = (props: any) => (
    <PageContainer direction="column" margin="0">
      <PageContainer align="flex-start" margin="20px 0">
          {props.pokemon.types.map((type: any) => (
          <TypeElement type={type.type.name}>
            <img alt="" height="20" style={{ color: 'black', margin: '5px' }} src={`/icons/${type.type.name}.svg`} />
          </TypeElement>
          ))}
      </PageContainer>

    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '270px',
      height: '100px'
      }}>
        <ProfileElement style={{
          padding: '10px 15px',
          background: 'rgba(255,255,255,.75)',
          height: '20px',
          fontWeight: 'bolder',
          textTransform: 'uppercase',
          margin: '5px',
          borderRadius: '14px',
          boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
        }}>
          Weight: {props.pokemon.weight}
        </ProfileElement>
        <ProfileElement style={{
          textTransform: 'uppercase',
          padding: '10px 15px',
          height: '20px',
          margin: '5px',
          background: 'rgba(255,255,255,.75)',
          fontWeight: 'bolder',
          borderRadius: '14px',
          boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
        }}>
          Height: {props.pokemon.height}
        </ProfileElement>
        <ProfileElement style={{
          textTransform: 'uppercase',
          padding: '10px 15px',
          height: '20px',
          margin: '5px',
          background: 'rgba(255,255,255,.75)',
          fontWeight: 'bolder',
          borderRadius: '14px',
          boxShadow: '0 20px 25px -10px rgb(0 0 0 / 15%)'
        }}>
          Area: {props.pokemon.habitat.name}
        </ProfileElement>
      </div>
      <div style={{
        marginLeft: '5px'
       }}>
        <h2 style={{ 
          color: 'white',
          fontWeight: 500,
          textShadow: 'rgb(0 0 0 / 25%) 0px 0px 12px'
         }}>ABILIITIES:</h2>
         <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           {props.pokemon.abilities.map((ability: any) => <li style={{
             color: 'white',
             listStyle: 'none',
             margin: '10px 0',
             cursor: 'pointer',
             fontSize: '18px',
             paddingBottom: '2px',
             borderBottom: '2px dotted black',
             textTransform: 'uppercase',
           }}>{ability.ability.name}</li>)}
         </ul>
      </div>
    </PageContainer>
);

export default Profile;