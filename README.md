# SSR

```bash
npm run build
npm run start
```

http://localhost:3000/out/ship/1


# SSG

```bash
npm run export
```

* Warn: Make sure not to open liveserver on a workspace but directly in the nextjs folder.

http://localhost:5500/out/ship/1.html

# Analysis

Observe the difference between URL links.

* link:
  * Server: http://localhost:3000/out/ship/1 
  * SSG export: http://localhost:5500/out/ship/1.html
<!--  -->
* Dynamic routes not available for SSG
  * Server: http://localhost:3000/out/ship/99999
  * SSG export: ERROR! http://localhost:3000/out/ship/99999.html