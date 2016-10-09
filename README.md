# HackSurround

Created by four students from UPC, HackSurround will allow you to connect different devices up to 8 audio channels in order to enjoy of surround experience.

HackSurround uses RTC web technology so any device with web browser (i.e. Google Chrome) can emit sound to others devices. Receivers connect to Apache Tomcat Server,hosted in a Amazon Web Server, in order to receive the web page, but the sound travels peer to peer thanks to PeerJS library which runs NodeJS framework. Firebase database is also used to know which devices are connected and provides an API to access them.

# How to use it
The user either choose which channel to join and which role does and then the streaming begins. To close the connection just close the browser.

