# Multer -->  Read NPM 
[multer](https://www.npmjs.com/package/multer)

MulterJS ek middleware hai jo Node.js ke applications mein file uploads ko handle karta hai. Yeh Express framework ke sath commonly use hota hai. Multer ko primarily use kiya jata hai `multipart/form-data` ko handle karne ke liye, jo ki majorly file uploads ke liye use hota hai.

## Multer ka kaam kaise karta hai?
Multer basically uploaded files ko intercept karta hai aur unhe server ke filesystem ya memory mein save karta hai. Yeh incoming request ke saath file data ko handle karta hai aur request object ke sath file(s) ko add kar deta hai, taki aap asani se unhe access aur process kar sakein.

## Multer ke important points:
### Configuration Options:

1. storage: Yeh define karta hai ki files kaha aur kaise store hongi. Do options hoti hain:
2. diskStorage: Files ko disk pe store karta hai ya file ko server pr upload krna.
3. memoryStorage: Files ko memory (buffer) mein store karta hai ya file ko database me upload krna.
4. limits: Yeh options aapko file size, file count, etc. par restrictions lagane ka mauka dete hain.
5. fileFilter: Yeh function decide karta hai ki koi specific file accept hogi ya nahi.

#### Disk Storage Configuration:
Disk storage configuration mein aapko `multer.diskStorage()` function use karna hota hai aur kuch additional options provide karni hoti hain jaise destination aur filename.

1. destiation: Yeh specify karta hai destination folder jaha files store hongi.
2. filename: Yeh specify karta hai file ka naam kaise generate hoga.
3. Handling Single vs Multiple Files:
   - single(fieldname): Ek hi file upload ke liye use hota hai.
   - array(fieldname, maxCount): Ek hi fieldname se multiple files upload karne ke liye.
   - fields([{ name: fieldname, maxCount: maxCount }, ...]): Multiple fields se files upload karne ke liye.

#### Memory Storage Configuration:
Memory storage configuration mein aapko sirf `multer.memoryStorage()` function use karna hota hai. Isme destination aur filename options ki zarurat nahi hoti kyunki files ko memory mein store kiya jata hai.

### Error Handling:
Multer automatic error handling karta hai agar koi limit exceed hoti hai ya koi aur issue hota hai.

### File naming: 
Aap customize kar sakte hain ki uploaded files ka naam kya hoga. Multer aapko flexibility deta hai ki aap unique filenames generate kar saken.

### usage: 
- Disk Storage: Suitable for long-term storage and when you need to keep files.
- Memory Storage: Suitable for temporary processing and when you don't need to keep files after processing.

### Benefits and Considerations of Disk and Memory Storage
`Benefits: `
1. Persistent Storage (Disk) vs. Fast Access (Memory):
   - Disk Storage: Files are stored on the disk, making them persistent. This means that even after server restarts, the files remain intact.
   - Memory Storage: Storing files in memory allows for very fast read/write operations, which can be critical for performance-intensive tasks.

2. Scalability (Disk) vs. Temporary Processing (Memory):
   - Disk Storage: Suitable for handling large file sizes and multiple files because disk space is generally more abundant than RAM.
   - Memory Storage: Ideal for temporary file processing like image manipulation, data analysis, or when files are to be uploaded to a cloud storage service afterward.

3. Ease of Access (Disk) vs. No Disk Space Use (Memory):
   - Disk Storage: Files stored on the disk are easily accessible for future use, backups, or sharing without requiring immediate processing.
   - Memory Storage: Files stored in memory do not consume disk space, which can be advantageous if disk space is limited or if the files are only needed temporarily.

4. Cost-Effective (Disk):
   - Disk Storage: Disk storage is usually cost-effective, especially for storing large volumes of data over long periods.

5. Backup and Recovery (Disk):
   - Disk Storage: It is easier to manage backups and recovery processes for files stored on the disk.

`Considerations: `
1. I/O Performance (Disk) vs. Limited Size (Memory):
   - Disk Storage: Disk operations (read/write) are slower compared to in-memory operations, which can impact performance.
   - Memory Storage: Memory (RAM) is limited compared to disk space. Large files or a high volume of files can exhaust the available memory, leading to performance degradation or crashes.

2. Disk Space Management (Disk) vs. Volatile Storage (Memory):
   - Disk Storage: Sufficient disk space must be available. If the disk becomes full, new files cannot be stored.
   - Memory Storage: Files stored in memory are temporary and will be lost if the server is restarted or if the application crashes.

3. Security (Disk) vs. Scalability (Memory):
   - Disk Storage: Proper security measures, such as file permissions and encryption, are needed to protect disk-stored files from unauthorized access.
   - Memory Storage: Memory storage is not suitable for long-term storage or large-scale applications due to its limited size and volatility.

4. Latency (Disk):
   - Disk Storage: Disk access latency is higher compared to memory operations, which might be an issue for time-sensitive applications.

5. Maintenance (Disk):
   - Disk Storage: Additional efforts are required for disk storage setup and maintenance to ensure the disk remains healthy and properly managed.