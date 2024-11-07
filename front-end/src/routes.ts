import { Component } from 'solid-js';
import LandingPage from '@/pages/landing-page/LandingPage.tsx';
import GoapPage from '@/pages/goap-page/GoapPage.tsx';
export default [
    { path: '/', component: LandingPage, name: 'Landing' },
    { path: '/goap', component: GoapPage, name: 'Goap' },
] as { path: string, component: Component, name: string }[]