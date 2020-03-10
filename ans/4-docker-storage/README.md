1. สร้าง folder เพื่อเก็บข้อมูลชื่อ data
2. docker run -d -p8000:80 -v $(pwd)/data/:/usr/share/nginx/html/ nginx:1.17-alpine
3. nginx ที่รันจะทำการเปลี่ยนแปลงหน้าเว็ปไปตามที่เราได้สร้างขึ้นมาเอา
4. เมื่อทำงานเปลี่ยนแปลงข้อมูลจาก path จาก local จะส่งผ่านตรงกลับ container