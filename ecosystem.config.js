module.exports = {
  apps : [{
    name: 'Desenvolvedores',
    script: 'server/index.js',
    args: 'run start:production',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {

    },
    staging : {
      user : 'ubuntu',
      host : '34.201.134.61',
      ref  : 'origin/master',
      repo : 'git@github.com:TIBonitour/react-with-seo.git',
      path : '/home/ubuntu/react-with-seo',
      'post-deploy' : 'sudo npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    dev : {

    }
  },
};
