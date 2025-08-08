---
title: "How To Install Discourse on Ubuntu 20.04"
description: "Discourse is an open-source discussion platform. You can use Discourse as a mailing list, a discussion forum, or a long-form chat room. In this tutorial, you will install Discourse in an isolated environment using Docker, a containerization application."
image: "/images/blog-1.jpg"
date: 2025-08-04T05:00:00Z
draft: false
---

##### Prerequisites

Before you get started, there are a few things you will need:

One Ubuntu 20.04 server with at least 2GB of RAM, a sudo non-root user, and a firewall. For guidance, you can reference our initial server setup tutorial for Ubuntu 20.04.
Docker installed on your server. To accomplish this, you can follow step 1 of our Docker installation tutorial for Ubuntu 20.04.
A domain (or subdomain) with an available A record pointed at your server’s IP. If you are managing your DNS on DigitalOcean, then you can follow this guide to associate your IP with your domain. This tutorial will use discourse.your_domain.
An SMTP mail server. If you don’t want to run your own mail server, you can use another service, like a free account on Mailgun.
Try Free SMTP www.smt2go.com

# Step 1 — Downloading Discourse
Before downloading and installing Discourse, create the /var/discourse directory. This is where all your Discourse-related files will reside:

```javascript
sudo mkdir /var/discourse
```
Finally, clone the official Discourse Docker Image into /var/discourse:

```javascript
sudo git clone https://github.com/discourse/discourse_docker.git /var/discourse
```
With the Discourse Docker image in place, you can now install and configure your platform.

# Step 2 — Installing and Configuring Discourse
Move to the /var/discourse directory:

```javascript
cd /var/discourse
```
Now launch the included setup script:

```javascript
sudo ./discourse-setup
```
The Discourse installation script will ask the following questions:

```javascript
Output
Hostname for your Discourse?
```

Enter discourse.your_domain, or whatever hostname you’ve chosen for your platform.

```javascript
Output
Email address for admin account?
```

Choose the email address that you want to use for the Discourse admin account. It can be unrelated to your Discourse domain and can be any email address you find convenient.

Note that this email address will become the Discourse administrator default. Later, you will need to reuse this email address when you set up Discourse from its control panel.

```javascript
SMTP server address?
SMTP user name?
SMTP port?
SMTP password?
```

Enter your SMTP server details for these questions. If you’re using Mailgun, the SMTP server address will be smtp.mailgun.org, and the username and password are the SMTP credentials for your domain under Mailgun’s domains tab.

Finally, the Discourse installation script will ask you to confirm all these settings. Confirm your settings, and the script will generate a configuration file called app.yml. The installation process will begin automatically.

```javascript
Note: If you need to change or fix these settings after installation, edit your /containers/app.yml file and run ./launcher rebuild app. Otherwise, your changes will not take effect.
```
The Discourse installation will take approximately 2-8 minutes, after which your instance will be running. Now you can open a web browser and create an administrator account.

# Step 3 — Registering an Administrator Account

Visit discourse.your_domain in your favorite web browser, and you will see the Discourse ‘Congrats’ splash screen.
image: "/images/installed.png"

If you receive a 502 Bad Gateway error, try waiting a minute or two and then refreshing your browser; your Discourse installation might not have completed.

When the page loads, click the blue Register button. You’ll see a form entitled Register Admin Account with the following fields:

Email: Choose the email address you provided earlier from the pull-down menu.
Username: Choose a username.
Password: Choose a strong password.
Then click the blue Register button on the form to submit it. You’ll see a dialog that says Confirm your Email. Check your inbox for the confirmation email. If you didn’t receive it, try clicking the Resend Activation Email button. If you’re still unable to register a new admin account, please see the Discourse email troubleshooting checklist.

After registering your admin account, the setup wizard will launch and guide you through Discourse’s basic configuration. You can walk through it now or click Maybe Later to skip.

