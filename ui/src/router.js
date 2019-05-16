import Vue from 'vue'

import Router from 'vue-router'

import dashboard from '@/dashboard'
import view from '@/view'
import novnc from '@/novnc'
import apps from '@/apps'
import appsgraph from '@/appsgraph'
import app from '@/app'
import appedit from '@/appedit'
import projects from '@/projects'
import project from '@/project'
import projectedit from '@/projectedit'
import datatypes from '@/datatypes'
import pubs from '@/pubs'
import pub from '@/pub'
import admin from '@/admin'
import openneuro from '@/openneuro'

import test from '@/test'
import missing from '@/missing'

Vue.use(Router)
/*
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})
*/

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/project'},
        {path: '/dashboard', component: dashboard},
        //{path: '/download/:id', component: download},
        
        {path: '/apps', component: apps, meta: {public: true}},
        {path: '/appsgraph', component: appsgraph, meta: {public: true}},
        {path: '/app/:id', component: app, meta: {public: true}},
        {path: '/app/:id/:mode', component: appedit},

        {path: '/view/:taskid/:type/:datatype64/:subdir?', component: view, props: true},
        {path: '/novnc/:taskid/:type/:datatype64/:subdir?', component: novnc, props: true},

        {path: '/project', component: projects, meta: {public: true}}, //deprecated by /projects (redirect?)
        {path: '/projects', component: projects, meta: {public: true}}, 
        {path: '/project/:id', component: project, meta: {public: true}},
        {path: '/project/:id/edit', component: projectedit},
        {path: '/project/:id/:tab?/:subid?', component: project},
        {path: '/openneuro/:id', component: openneuro, meta: {public: true}},

        {path: '/datatypes', component: datatypes, meta: {public: true}},
        {path: '/datatypes/:id', component: datatypes, meta: {public: true}},

        {path: '/pubs', component: pubs, meta: {public: true}},
        {path: '/pub/:id', component: pub, meta: {public: true}},

        {path: '/test', component: test},
        {path: '/404', component: missing, meta: {public: true}},
        
        {path: '/admin', component: admin},
    ]
})


