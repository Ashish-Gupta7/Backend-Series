# Networking and Some IMP Things

## INTERNET

Internet ek bahut bada network hai jo duniya bhar mein alag-alag computers ko jodta hai. Har ek computer ya device jo internet se juda hota hai, woh ek unique address rakhta hai jise IP address kehte hain. Internet kaam kaise karta hai, ye samajhne ke liye socho ki ek computer ko koi information chahiye internet se. Jab woh computer us information ko search karta hai, toh woh information uske browser ke through request hoti hai.

Ab yeh request us computer se us information tak pahunchane ke liye bahut saare routers, servers aur cables ka istemal hota hai. Routers woh devices hote hain jo information ko ek se dusre computer tak bhejne mein madad karte hain. Servers woh computers hote hain jo information ko store karte hain aur unhe dusre computers ko bhejte hain jab unki demand hoti hai. Cables jaise ki fiber optic ya coaxial cables, information ko ek jagah se doosri jagah tak le jaane ka kaam karte hain.

Jab information request hoti hai, toh woh request computer ke ISP (Internet Service Provider) ke through servers tak pahunchti hai. Fir servers woh information lekar use request karne wale computer tak bhejte hain. Ye pura process kuch milliseconds mein hota hai, jo ki hume lagta hai ki information turant mil gayi hai.

Internet kaam karta hai ek protocol system ke through, jise TCP/IP kehte hain. Ye protocol system ensure karta hai ki information sahi tarike se bheji jaati hai aur receiver tak pahunchti hai. Isi tarah se internet har ek computer ko alag-alag jagah se connect karta hai aur duniya bhar mein information ko share karne mein madad karta hai.

## IP Address

Ye kisi bhi device pr inbuilt nhi aata hai, jab device user internet se connect hota hai to uska ISP hi uss device ko jab wo device internet se connect hai tb tk ke liye IP-Address deta hai.

IP address ek unique identifier hoti hai jo har ek device ko internet par recognize karne mein madad karti hai. Ye address hota hai jaise ki ek ghar ka pata, jisse internet par alag-alag devices ek dusre ko pehchan sake.
(Har ek device ka ip address alag-alag hota hai.)

IP address kaam karta hai jaise ki postal address. Jab koi information bheji jaati hai internet par, toh us information ko send karne waale aur receive karne waale device ko pehchanne ke liye IP address ka istemal hota hai lekin yadi receive karne wala aur information send karne wala dono ek hi wifi se connected hoge tab ip address nhi balki mac address kam karta hai.

IP address do prakar ke hote hain: IPv4 aur IPv6. IPv4 address 32-bit ka hota hai aur generally decimal numbers mein likha jaata hai (jaise ki 192.168.1.1). IPv6 address lamba hota hai aur hexadecimal numbers mein likha jaata hai (jaise ki 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

Har ek device ko jab internet se connect kiya jaata hai, toh us device ko ek unique IP address assign kiya jaata hai, jisse wo dusre devices se communicate kar sake. IP address ka istemal hota hai information ko sahi jagah tak pahunchane mein aur internet communication ko possible banane mein.

## Public vs Private IP address

public IP address internet par reachable hota hai aur external communication ke liye istemal kiya jata hai, jabki private IP address local network ke internal communication ke liye istemal kiya jata hai aur non-routable hota hai internet par.

Aapke device ko internet par identify karne ke liye ek unique address hota hai, jo public IP address kehte hain. Ye address aapke internet service provider (ISP) ke through provide kiya jata hai. Jaise ki poori duniya mein alag-alag ghar ke liye alag alag address hote hain, waise hi har ek device ke liye internet par ek alag address hota hai.

Lekin jab aap apne ghar ke andar kisi device se dusre device ke saath communicate karte hain, tab aap unhein ek internal address dete hain, jo private IP address kehlate hain. Ye address sirf aapke ghar ke andar hi kaam karta hai aur internet par reachable nahi hota.

## MAC ADDRESS

Ye har ek device me inbuilt aata hai.

MAC address, yaani Media Access Control address, ek unique identifier hota hai jo har ek network device ko identify karne mein madad karta hai. Ye address har ek network interface card (NIC) ya network adapter ke saath associated hota hai.

MAC address kaam karta hai jaise ki ek serial number. Har ek NIC ko manufacturing process mein ek unique MAC address assign kiya jata hai. Is address mein 12 hexadecimal digits hote hain, jo colon ya hyphen ke saath alag-alag sections mein likhe jaate hain (jaise ki 00:1A:2B:3C:4D:5E).

MAC address ka upyog local area networks (LANs) mein hota hai, jahan ek device doosre devices se direct communication karta hai, jaise ki ek router, switch, ya access point ke through. Jab koi device LAN par information send karta hai, toh woh apne MAC address ka istemal karta hai taaki us information ko sahi destination tak pahunchaya ja sake.

MAC address IP address se thoda alag hota hai, kyunki ye device ke hardware level par hota hai aur change nahi kiya ja sakta hai. Ye address network layer par kaam karta hai, jabki IP address internet layer par kaam karta hai. MAC address local communication mein kaam karta hai, jabki IP address global communication mein kaam karta hai.

WhatsApp hacking mein MAC address ka use kiya jaata tha, lekin MAC address change karne ki technique nahi thi. WhatsApp hacking ke liye purane time mein kuch hackers ek technique istemal karte the, jise MAC spoofing kehte hain.

MAC spoofing mein hacker ek device ka MAC address change kar deta hai taaki woh victim ke device jaisa dikhe. Isse hacker victim ke naam se WhatsApp account activate kar leta tha. Jab victim ka phone network par connect hota, toh hacker ke device ka MAC address use hota tha, jisse WhatsApp server ko lagta tha ki victim ka device hi use ho raha hai.

Lekin, MAC spoofing technique effective nahi thi aur iske legal implications bhi hote the. Iske alawa, WhatsApp ne security measures improve kiye aur aise hacks ko prevent karne ke liye security updates release kiye.

Aaj kal, hacking techniques aur security measures dono evolve kar chuke hain, aur MAC spoofing jaise techniques effective nahi rehti hain WhatsApp jaise secure applications ko hack karne mein.

## ISP

ISP yaani Internet Service Provider ek company hoti hai jo internet access provide karti hai users ko. Ye access various forms mein ho sakta hai, jaise ki broadband, DSL, cable, ya satellite internet.

ISP kaam kaise karta hai, ye samajhne ke liye socho ki jab aap apne computer ya mobile device se internet par kuch bhi access karte ho, jaise ki websites, emails, ya videos dekhte ho, toh ye saari activities aapke ISP ke through hoti hain.

Jab aap kisi website ko access karte ho, toh aapka device ek request bhejta hai ISP ke servers ko. Yeh request hoti hai jaise ki "Mujhe yeh website dikhao." ISP ke servers us request ko receive karte hain aur phir wo request ko puri karte hue internet ke zariye se wo website ka data aapke device tak pahunchate hain.

ISP ka infrastructure bada hota hai, jisme routers, servers, aur networking equipment shaamil hote hain. Ye infrastructure ke zariye ISP internet access provide karte hain apne customers ko.

ISP ke through aapka device internet se connect hota hai, aur fir aap internet ka maza lete ho. ISP ki services se aapka device internet par access hota hai aur aap internet par surf karte rahte ho.

## FIBRE OPTIC CABLE

Fiber optic cable ek prakar ka network cable hai jo data ko light signals ke roop mein transmit karta hai. Yeh cable ek kaafi advanced technology hai aur traditional copper wires se kaafi tezi se data transfer karne mein madad karta hai.

Fiber optic cables ek plastic ya glass ke fibers se bane hote hain jo bohot patle hote hain. In fibers ke center mein ek core hota hai jo light signals ko transmit karta hai aur uske chaaron taraf ek cladding hota hai jo light signals ko core mein hi rehne mein madad karta hai. Is tarah se light signals fiber optic cable ke through travel karte hain.

Fiber optic cables ki khaasiyat ye hai ki inme data bohot tezi se aur secure tarike se travel karta hai. In cables ke through data ko light signals ke form mein bheja jaata hai, jo ki traditional copper wires ke comparison mein kaafi tez hota hai. Isse high-speed internet connections, telecommunication networks, aur data transmission mein kaafi madad milti hai.

Fiber optic cables ke kuch faayde hain jaise ki:

High-Speed Data Transfer
Long Distance Transmission
Secure Data Transmission

## TCP vs IP

TCP (Transmission Control Protocol) aur IP (Internet Protocol) dono hi internet communication ke liye important protocols hain, lekin in dono mein kuch mukhya farq hain:

(1.) Functionality:
IP (Internet Protocol): IP address ko define karta hai aur data packets ka routing kaise hoga, ye decide karta hai. IP ek addressing scheme provide karta hai jo devices ko internet par uniquely identify karta hai aur unhe communicate karne mein madad karta hai.
TCP (Transmission Control Protocol): TCP data transmission ko control karta hai. Ye ensure karta hai ki data packets sahi order mein receive ho, error-free ho, aur sahi destination tak pahunch jaye. Ismein reliability, flow control, error checking jaise features shamil hote hain.

(2.) Layer in OSI Model:
IP: IP network layer par kaam karta hai OSI model mein, jo ki third layer hai. Iska kaam hota hai data packets ko source se destination tak pahunchana.
TCP: TCP transport layer par kaam karta hai OSI model mein, jo ki fourth layer hai. Iska kaam hota hai data transmission ki quality aur reliability ka dhyan rakhna.

(3.) Use Case:
IP: IP address ke through devices ko internet par identify kiya jata hai aur unhe address kiya jata hai tak data packets un tak pahunch sake.
TCP: TCP connection-oriented protocol hai jo data transmission mein reliability aur error-checking ka dhyan rakhta hai. Ye data ko ek connection ke through bhejta hai aur ensure karta hai ki data sahi tarike se receive ho.

Toh, mukhya farq yeh hai ki IP address devices ko identify karne mein madad karta hai aur data packets ko routing karta hai, jabki TCP data transmission ko control karta hai aur reliability ensure karta hai.

## ROUNTING and SURFING

"Routing" aur "surfing" dono internet se judi terms hain, lekin inka matlab alag-alag hota hai:

### Routing:

Routing ek network concept hai jisme data packets ko source se destination tak pahunchane ka rasta decide kiya jata hai. Jab aap kisi website ya online resource ko access karte hain, toh aapka device ek request bhejta hai aur wo request data packets ke form mein hoti hai. Ye data packets source device se destination device tak pahunchne ke liye multiple routers aur networking devices ke through travel karte hain. Har router data packet ko apne next hop router tak forward karta hai, jisse packets sahi destination tak pahunch sake.

### Surfing:

Surfing ka matlab hai internet par browsing karna ya online content access karna. Jab aap internet par kisi website par jaate hain, articles padhte hain, videos dekhte hain, ya kisi social media platform par activity karte hain, toh isey surfing kehte hain. Is process mein aap apne web browser ka istemal karte hain jo aapko internet par available content tak pahunchata hai. Surfing ek casual term hai jo internet par online activities ko describe karne ke liye istemal kiya jata hai.

Samanya roop se kaha jaye toh, routing network infrastructure ko describe karta hai jo data packets ko sahi destination tak pahunchata hai, jabki surfing internet par online content access karne ka process hai.

## SERVERS

Server ek computer system hota hai jo network ke through requests ko receive karta hai aur unka processing karta hai. Ye requests various clients ya users se aati hain jo network ke through connected hote hain.
mtlb Aisa koisa bhi system jo internet se connected ho requests ko accept krta ho aur unn requests ka response krta ho tb wo system server kahlata hai.

Servers ka use data storage, processing, aur sharing ke liye hota hai. Ye alag-alag types ke hote hain aur alag-alag functions serve karte hain:

(1.) File Servers: Ye servers files aur documents ko store aur share karne ke liye use hote hain. Ye files local network par accessible hote hain jisse multiple users unhe access kar sake.

(2.) Web Servers: Web servers internet par websites ko store aur deliver karte hain. Jab aap kisi website ko access karte hain, aapka browser web server se request bhejta hai aur server aapko website ke pages aur content ko provide karta hai.

(3.) Database Servers: Ye servers databases ko store aur manage karte hain. Ye database management systems (DBMS) ke through data ko organize aur access karne mein madad karte hain.

(4.) Application Servers: Application servers specific software applications ko run aur access karne ke liye use hote hain. Ye applications kisi particular task ya service ke liye design kiye jate hain, jaise ki email servers, messaging servers, gaming servers, etc.

(5.) Mail Servers: Ye servers emails ko send, receive, aur store karne ke liye use hote hain. Jab aap kisi email service ka istemal karte hain, aapka email server emails ko send aur receive karta hai.

(6.) Proxy Servers: Proxy servers internet traffic ko filter, cache aur manage karne ke liye use hote hain. Ye security, performance optimization, aur network resource sharing ke liye istemal kiye jate hain.

In servers ka ek mukhya feature hota hai ki ye hamesha on rehte hain aur client requests ka response dete rehte hain. Ye always-on nature aur high reliability ki wajah se servers essential components hote hain network infrastructure mein.

## PROTOCOL

Protocol ek set of rules hoti hai jo communication systems mein use hoti hai taaki devices ek dusre se interact kar sakein. Ye rules specify karte hain ki data ko kaise transmit kiya jayega, kis tarah ke formats mein data ko organize kiya jayega, aur kis tarah ke errors ko handle kiya jayega.

Protocol ek standardized way hai communication ko define karne ka, jisse devices ko ek dusre se samajhne mein madad milti hai. Har ek communication system, jaise ki internet, local area networks (LANs), wireless networks, etc., apne khud ke protocols ka istemal karte hain.
Example =>
TCP/IP (Transmission Control Protocol/Internet Protocol): Primary protocol suite used for internet communication.

HTTP (Hypertext Transfer Protocol): Protocol used for transmitting web pages and other web content.

HTTPS (Hypertext Transfer Protocol Secure): Secure version of HTTP that uses encryption for secure communication over the internet. Isme SSL certificate hota hai, jo ki HTTP me nhi hota hai.

FTP (File Transfer Protocol): Protocol used for transferring files between a client and a server on a computer network.

SMTP (Simple Mail Transfer Protocol): Protocol used for sending emails from a client to a server or between servers.

POP3 (Post Office Protocol version 3): Protocol used by email clients to retrieve emails from a mail server.

IMAP (Internet Message Access Protocol): Protocol used by email clients to access and manage emails stored on a mail server.

DNS (Domain Name System): Protocol used for translating domain names into IP addresses on the internet.

DHCP (Dynamic Host Configuration Protocol): Protocol used for automatically assigning IP addresses and other network configuration parameters to devices on a network.

ARP (Address Resolution Protocol): Protocol used for mapping an IP address to a physical MAC address on a local network.

ICMP (Internet Control Message Protocol): Protocol used for sending error messages and operational information between network devices.

SNMP (Simple Network Management Protocol): Protocol used for monitoring and managing network devices and their functions.

SSH (Secure Shell): Protocol used for secure remote access to a computer or server over a network.

Telnet: Protocol used for remote terminal access to a computer or server over a network.

RDP (Remote Desktop Protocol): Protocol used for remote desktop access and control over a network.

### ROUTER & BRODBAND

Router: Ek router ek network device hota hai jo data packets ko receive karta hai aur unhe ek network se dusre network tak forward karta hai. Ye forwarding process destination address aur routing table ke based par hoti hai. Routers ka istemal local area network (LAN) aur wide area network (WAN) mein kiya jata hai.

Router ke kuch mukhya functions hain:

Routing: Data packets ko source se destination tak pahunchane ke liye optimal path ka selection karna.
Packet Forwarding: Data packets ko unke destination tak forward karna, jisse sahi communication possible ho.
Network Address Translation (NAT): Private IP addresses ko public IP addresses mein translate karna, jisse multiple devices ek single public IP address ke through internet par communicate kar sakein.
Security: Firewalls aur security policies ka implementation karke network ko secure karna.
Bandwidth Management: Network traffic ko monitor karna aur bandwidth ka allocation karna.

Broadband: Broadband ek high-speed internet connection hota hai jo multiple data channels ka istemal karta hai. Ismein data ko ek saath transmit kiya jata hai, jisse faster internet access hota hai. Broadband connections ko typically DSL, cable, fiber optic, ya satellite se provide kiya jata hai.

Kuch broadband connections ke prakar hain:

DSL (Digital Subscriber Line): Telephone lines ka istemal karke internet access provide karta hai.
Cable Broadband: Cable TV lines ke through internet access provide karta hai.
Fiber Optic Broadband: High-speed fiber optic cables ka istemal karke internet access provide karta hai.
Satellite Broadband: Satellites ke through internet access provide karta hai, jisse rural areas mein bhi internet connectivity available hoti hai.
Broadband connections ka advantage hai ki ye high-speed internet access provide karte hain, jisse users ko fast streaming, downloads, aur online activities ka maza milta hai.

## LAN

LAN ya Local Area Network ek chhota network hota hai jo limited geographic area, jaise ki ek building, office, ya ek ghar ke andar hota hai. Ismein multiple devices, jaise ki computers, printers, aur smartphones, ek dusre se connect hote hain takay wo resources, jaise ki files, printers, aur internet access, ko share kar sakein.

LAN ka istemal local communication aur resource sharing ke liye hota hai. Kuch important points LAN ke baare mein:

Limited Area: LAN ka range limited hota hai aur typically ek building ya ek floor ke andar hi hota hai.

High Speed: LAN connections usually high-speed hote hain, jisse ki users ke beech data fast transfer kiya ja sake.

Private Network: LAN typically private hota hai, yani ki sirf authorized users hi ismein access kar sakte hain.

Resource Sharing: LAN allows resource sharing jaise ki files, printers, aur internet access, jo multiple users ke beech easily share ho sakte hain.

Easy Communication: LAN ke through users asaani se ek dusre se communicate kar sakte hain, jisse collaboration aur teamwork badh jata hai.

LAN ko setup karne ke liye network devices, jaise ki routers, switches, aur Ethernet cables ka istemal kiya jata hai. Ye devices data packets ko forward karte hain aur communication ko facilitate karte hain. LAN ke through, users ek hi network mein connected hote hain aur resources ko share kar sakte hain.

## LOCALHOST

"Localhost" ek technical term hai jo typically computer programming aur network administration mein istemal hota hai. Yeh ek special hostname hai jo ek device ke own network interface ya loopback interface ko refer karta hai.

Jab aap "localhost" ka istemal karte hain, aap apne hi device ko refer kar rahe hote hain. Iska matalab hota hai ki jab aap kisi application ya service mein "localhost" ka istemal karte hain, wo application ya service apne hi device par run kar rahi hoti hai aur aap apne device par hi interact kar rahe hote hain.

Localhost ka IP address usually "127.0.0.1" hota hai, jisse loopback address bhi kaha jata hai. Ye address local communication ke liye reserve hota hai aur kisi bhi data ko send karne ke bajaye use direct hi receive kar deta hai, jisse aap apne hi device par data ko test kar sakte hain.

Localhost ka istemal development aur testing ke liye bhi hota hai, jaise ki web development mein jab aap apne web applications ko test karte hain, ya network troubleshooting mein jab aap network connections aur services ko diagnose karte hain.

"localhost" ki madad se aap apne hi device ko server bana sakte hain. Jab aap kisi server application ya service ko apne device par run karte hain aur usme "localhost" ka istemal karte hain, toh wo application apne hi device par ek server ki tarah behave karti hai.

## DNS

DNS, ya Domain Name System, ek distributed database system hai jo domain names ko IP addresses mein translate karta hai. Iska mukhya uddeshya hai human-readable domain names ko network ke machines dwara understood IP addresses mein convert karna.

DNS kaam kaise karta hai:

Domain Names: Internet par har ek device ka ek unique IP address hota hai, lekin users IP addresses ko yaad rakhna mushkil ho sakta hai. Isliye, hum domain names ka istemal karte hain, jaise ki "google.com" ya "facebook.com", jo ki human-readable hote hain.

DNS Server: Jab aap kisi domain name ko apne web browser mein type karte hain, aapka computer us domain name ke IP address ko retrieve karne ke liye DNS server se communicate karta hai.

DNS Resolution: DNS server domain name ke corresponding IP address ko find karne ke liye recursive lookup process shuru karta hai. Agar wo DNS server ne domain name ke IP address ko pehle se cache kiya hua hai, toh wo directly use karta hai, warna wo dusre DNS servers se information retrieve karta hai.

Response: Jab DNS server domain name ke IP address ko successfully find karta hai, wo IP address ko client device tak return karta hai. Client device phir us IP address ko use karke corresponding website ya service tak pahunchta hai.

DNS ka istemal internet par browsing, email, file sharing, aur other network activities ke liye kiya jata hai. Ye system network communication ko simplifiy karta hai aur users ko IP addresses ki complexity se bachata hai.

## PORTS

Port ek network address hota hai jo ek specific service ya application ke liye reserved hota hai. Har ek network connection ko ek source port aur ek destination port assigned hota hai, jo communication ke endpoints ko identify karta hai.

Ports TCP aur UDP protocols mein istemal kiye jate hain. Kuch mukhya points port ke baare mein:

Port Numbers: Ports 16-bit unsigned integers hote hain, jinmein 0 se 65535 tak ke values ho sakti hain. Inmein se kuch ports standard services aur applications ke liye reserved hote hain, jaise ki Port 80 HTTP ke liye aur Port 443 HTTPS ke liye.

Types of Ports:

Well-known Ports: Ports range 0 se 1023 tak ke hote hain, jinmein well-known services ke liye reserved ports shamil hote hain, jaise ki HTTP (Port 80) aur FTP (Port 21).
Registered Ports: Ports range 1024 se 49151 tak ke hote hain, jinmein registered services aur applications ke liye reserved ports shamil hote hain.
Dynamic/Private Ports: Ports range 49152 se 65535 tak ke hote hain, aur ye temporary ports hote hain jo client devices ke temporary communication ke liye istemal kiye jate hain.
Port Allocation: Jab koi device ek connection establish karta hai, toh source port ek randomly available port se select hota hai, jabki destination port specific service ke liye reserved hota hai.

Communication: Jab data packets ek device se doosre device tak transmit kiye jate hain, toh source aur destination ports un communication endpoints ko identify karte hain jinmein data packets originate hote hain aur jin tak pahunchte hain.

Jab koi client device server se communication establish karta hai, toh wo connection mein source aur destination port numbers ka istemal hota hai. Client device ek specific destination port number par request bhejta hai, jise server uske incoming connection ke through receive karta hai. Server phir request ke basis par appropriate service ya application tak data forward karta hai jo designated port number par run kar rahi hai.

### localhost port

Localhost par port kaam karne ka tarika depend karta hai ki kaun sa service ya application aap local environment mein run kar rahe hain. Yeh ports local server applications aur services ke liye reserve kiye jaate hain, jaise ki web server, database server, FTP server, aur kai aur.

Jab aap kisi service ya application ko local environment mein run karte hain, toh aap use ek specific port number par bind karte hain. Jab koi client device localhost par connection establish karta hai, toh wo port number ke through connection ko establish karta hai.

Yeh kuch common examples hain kaise localhost par port kaam karta hai:

Web Server (e.g., Apache, Nginx):

Web server ko typically port 80 (HTTP) ya port 443 (HTTPS) par run kiya jata hai.
Jab aap web browser se localhost par kisi webpage ko access karte hain, toh browser port 80 ya 443 par request bhejta hai aur web server us request ko handle karta hai.
Database Server (e.g., MySQL, PostgreSQL):

Database server ko ek specific port par run kiya jata hai, jaise ki port 3306 (MySQL) ya port 5432 (PostgreSQL).
Jab aap database client application (jaise ki MySQL Workbench) se localhost par connect karte hain, toh wo database server ke specified port par connect hota hai.
FTP Server:

FTP server ko typically port 21 par run kiya jata hai.
Jab aap FTP client se localhost par connect karte hain, toh client port 21 par connect hota hai aur server se files ko transfer karta hai.
Is tarah se, jab bhi aap localhost par kisi service ya application ko run karte hain, toh us service ya application ke liye ek specific port number bind hota hai jisse ki incoming connections ko handle kiya ja sake. Jab koi client device localhost par connection establish karta hai, toh wo port number ke through connection ko establish karta hai aur communication hoti hai.

Ek popular example hai ki Visual Studio Code (VS Code) ki Live Server extension jo local development server provide karta hai, wo default taur par port 5500 ka istemal karta hai. Is extension ke through, aap apne local web projects ko live server par run kar sakte hain, jisse aap apne changes ko real-time dekh sakte hain.

## HTTP & HTTPS

HTTP (Hypertext Transfer Protocol) aur HTTPS (Hypertext Transfer Protocol Secure) dono hi internet communication ke protocols hain jo web browsing aur data transmission mein istemal kiye jate hain. Yeh protocols client-server model par kaam karte hain jahan web browsers (clients) web servers se communication establish karte hain.
Yahan kuch mukhya differences hain HTTP aur HTTPS ke beech mein:

1. Security:
   HTTP: HTTP insecure communication provide karta hai. Data ko plain text mein transmit kiya jata hai, jisse ki sensitive information ko intercept karne mein asani hoti hai.
   HTTPS: HTTPS secure communication provide karta hai. Ismein data ko encryption ke through transmit kiya jata hai, jisse ki koi third party data ko intercept nahi kar sakta.

2. Encryption:
   HTTP: HTTP mein data ko encrypt nahi kiya jata hai, isliye ye vulnerable hota hai interception aur data theft ke liye.
   HTTPS: HTTPS mein data ko SSL/TLS encryption ke through encrypt kiya jata hai, jisse ki data secure tarike se transmit hota hai.

3. Port:
   HTTP: HTTP ka default port number 80 hota hai.
   HTTPS: HTTPS ka default port number 443 hota hai.

4. URL Scheme:
   HTTP: URLs HTTP protocol ke liye "http://" scheme ke saath shuru hote hain.
   HTTPS: URLs HTTPS protocol ke liye "https://" scheme ke saath shuru hote hain.

5. Certificate:
   HTTP: HTTP mein server certificate ki zarurat nahi hoti.
   HTTPS: HTTPS mein server SSL/TLS certificate ki zarurat hoti hai, jo ki ek cryptographic key hota hai jo server ko authenticate karta hai.

Overall, HTTPS HTTP ke comparison mein secure communication provide karta hai, jisse ki sensitive information, jaise ki passwords, payment details, aur personal data, ko protect kiya ja sake. HTTPS ki wajah se data encryption aur server authentication hota hai, jo ki internet security aur privacy ko improve karta hai.

## Mnitor Mode

Aap market se ya Monitor mode ko enable karne ke liye aapko kisi specific command ya software ka istemal karna hoga.

koi website hai yadi uss pr hmm koi chat ya data input krte hai to wo rays ki form me surf hoti hai aur unhi rays me data hota hai jise monitor mode ki madad se padha ja skta hai. ab yadi website http pr hogi to hmm uska data padh skte hai aur yadi website https pr bani hogi to hmm uska data nhi padh skte hai hmm https ka data access to kr lege lekin wo data kuchh code ke form me likha hoga aur iss tarah ke text ko encripted text kahte hai.

## Framework and Library

Framework ek software development ke liye ek structured environment ya foundation hoti hai jo developers ko application banane mein madad karti hai. Ye pre-defined code libraries, reusable code templates, aur tools ko provide karti hai jo application development ko asaan aur efficient banati hai.

Library:

Library ek collection hoti hai pre-written code ka jo specific functionality provide karta hai.
Developers libraries ka istemal apne existing projects mein kar sakte hain, jahan unhe specific functionality ki zarurat hoti hai.
Libraries typically modular hoti hain, matlab ki aap unke individual components ko select kar sakte hain aur apne code mein integrate kar sakte hain.
Example: NumPy (Python numerical computing library), React (JavaScript library for building user interfaces).

Framework:

Framework ek complete environment hota hai jo application development ko support karta hai. Ye ek set of rules, conventions, aur pre-defined structures provide karta hai.
Developers frameworks ka istemal karte hain apne applications ko develop karne ke liye. Frameworks specific architecture aur workflow follow karte hain.
Frameworks typically opinionated hoti hain, matlab ki wo developers ko ek specific way mein kaam karne par majboor karti hain.
Example: Django (Python web framework), Angular (JavaScript framework for building web applications).

Overall, A library is a collection of pre-written code that can be used to perform specified tasks and a framework is a set of pre-written code that provides a structure for developing software applications.

## C and D drive

Install mtlb hota hai aapke laptop/desktop/koi aur device me files ko copy krna.

C drive aur D drive Windows operating system mein disk partitions ko represent karte hain.

C Drive: C drive typically Windows operating system ka primary disk partition hota hai jahan par operating system aur installed programs store hote hain. Jab aap Windows ko install karte hain, to wo C drive par default hota hai. Ismein Windows files, system files, aur installed applications store hote hain.

D Drive: D drive ek additional disk partition hota hai jo aksar users khud create karte hain ya phir system ke saath pre-configured hota hai. Ye partition aksar data storage ke liye use hota hai. Users ismein apne files, documents, media (photos, videos, music), aur other personal data store karte hain taaki unka data organized rahe aur C drive ka space bacha rahe.

Hard disk ya SSD mein C drive aur D drive partitions create karne ka purpose hota hai disk space ko organize karna, performance improve karna, aur data ko alag-alag sections mein distribute karna.

## cmd vs terminal

In dono mein kuchh fark hai jaise operating system aur commands ka nature, lekin basic taur par, dono hi kaam mein commands execute karne mein madad karte hain.

## SSL certificate

SSL certificate (Secure Sockets Layer certificate) ek digital certificate hota hai jo websites ya web servers ke cryptographic key ko authenticate karta hai. Ye cryptographic key website aur browser ke beech secure communication ke liye use hota hai. Jab aap kisi secure website ko visit karte hain, jaise ki online shopping websites ya banking portals, toh aap notice karenge ki URL ke shuruaat mein "https://" hota hai, jisme "s" secure connection ko represent karta hai. Ye SSL certificate ki presence ko indicate karta hai.

SSL certificate ko use karke, sensitive information jaise ki credit card numbers, login credentials, aur personal information ko encrypted form mein transmit kiya ja sakta hai. Ye certificate website ke identity ko verify karta hai, jisse users ko assurance milti hai ki woh legitimate website se communication kar rahe hain aur koi third-party unauthorized access nahi kar sakta.

Overall, SSL certificates internet security aur privacy ko enhance karte hain, aur users ko secure online experience provide karte hain.

## Parse aur Fetch

Parsing ka matlab hota hai kisi bhi data ya information ko analyze karna aur usse meaningful format mein convert karna.
For example, agar aap ek HTML file ko parse karte hain, toh aap uske tags aur elements ko identify karke ek tree-like structure bana sakte hain, jo browser ko web page display karne mein help karta hai.

1. Fetch:

- Definition: Fetch ka matlab hota hai data ko kisi source (jaise server, database, file, etc.) se retrieve karna ya laana.
- Use Case: Jab aapko kisi remote location se data chahiye, aap fetch function use karte hain.
- Example: Web browser server se web page data fetch karta hai. API call karte waqt hum server se data fetch karte hain.
- Function: Fetching involves making a request to the server and receiving the response

2. Parse:

- Definition: Parse ka matlab hota hai kisi raw data ko analyze karna aur usse ek meaningful structure mein convert karna taaki usse use kiya ja sake.
- Use Case: Jab aapke paas raw data (jaise string, JSON, XML) hota hai aur aapko usse processable format mein convert karna hota hai, aap parsing karte hain.
- Example: JSON data ko JavaScript object mein convert karna (parsing JSON).
- Function: Parsing involves breaking down the data into components and understanding its structure.

`Example for Both:`
Suppose, aap ek web page se weather data fetch kar rahe hain.

- Fetch: Aap server se request bhejte hain aur weather data ko fetch karte hain.
- Parse: Fetch kiya hua weather data ek raw JSON format mein ho sakta hai, jise parse karna hoga.

## Proxy and VPN(Virtual Private Network)

### Proxy

By example: Mai 'a' hu mujhe 'b' website ko chalana hai, lekin kisi wajah(govt. ke dwara block kr dena, sabhi ke liye open na hona...) se mai 'b' website ko open nhi kr skta hu ya phir mai usey deirectly open nhi krna chahta hu tb mai kisi 'c' website ke through 'b' pr jauga aur uske features ko use kr skta hu.

- Functionality: Proxy ek intermediary server hota hai jo aapke internet requests ko forward karta hai. Jab aap internet par kuchh access karte hain, aapka request pehle proxy server ke paas jaata hai, jo phir usse aage internet par forward karta hai.
- Use Case: Ye mainly IP address ko hide karne aur geographic restrictions ko bypass karne ke liye use hota hai.
- Security: Proxy servers usually data ko encrypt nahi karte, isliye yeh thoda kam secure hote hain. Websites aur ISPs (Internet Service Providers) phir bhi aapki activities ko track kar sakte hain.

### VPN

vpn bhi proxy ki tarah hi same kaam krta hai.

- Functionality: VPN aapke device aur internet ke beech ek secure, encrypted tunnel create karta hai. Iske through sabhi internet traffic VPN server ke through jaata hai, jo usse encrypt karke aage forward karta hai.
- Use Case: Ye privacy aur security ko badhane ke liye use hota hai. Yeh geographic restrictions ko bypass karne ke saath-saath data ko encrypt bhi karta hai.
- Security: VPN high-level encryption provide karta hai, isliye aapki online activities ko track karna mushkil ho jata hai. VPN aapke IP address ko bhi mask karta hai.

### difference between Proxy and VPN

- Proxy: IP address ko hide karta hai, magar encryption nahi provide karta, isliye websites aur ISPs aapki activities track kar sakte hain.
- VPN: Data ko encrypt karta hai aur IP address ko hide karta hai, isliye online activities ko track karna mushkil hota hai.

## TCP

When a request comes in, it is sent back as a response at a specified time.

## UDP

This provides a streaming platform. The request is not stopped anywhere and is responded to immediately

## http version
1. virsion1 -> TCP
2. virsion2 -> TCP
3. virsion3 -> TCP and UDP

## Thread
example ke liye mere pas 4 thread hai, 1st req pr 1 thread busy ho jayega, , 2nd req pr 2 thread busy ho jayega, 3rd req pr 3 thread busy ho jayega, 4th req pr 4 thread busy ho jayega. jaise hi thread req ka kaam poora krte jate hai usi time pr wo free ho jata hai aur agle req ke liye taiyar rahta hai.
aur yadi saare thread busy ho jate hai to agla req pending pr tb tk rhta hai jb tk ki koi thread free na ho jaye.

Node.js single-threaded environment hota hai. Node.js single-threaded event-driven architecture ko use karta hai. Matlab, Node.js ek hi thread ka use karke multiple clients ke requests ko handle karta hai. Yeh approach kaafi efficient hoti hai jab non-blocking I/O operations ki baat aati hai.

Lekin Node.js ka event loop aur asynchronous nature usko multi-threaded jaise behave karne mein madad karta hai. Jab bhi koi I/O operation hota hai, jaise file reading, network request, etc., toh yeh operations background mein perform hote hain aur jab operation complete hota hai tab callback function ko execute karta hai. Is tarah se Node.js high concurrency achieve kar leta hai bina multiple threads create kiye.