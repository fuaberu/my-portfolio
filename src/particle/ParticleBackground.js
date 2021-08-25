import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particle-config';

function ParticleBackground() {
	return <Particles height="85vh" params={particlesConfig}></Particles>;
}

export default ParticleBackground;
