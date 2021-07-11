# Dodge The Block 
by นายภาสกรบัวแก้ว รหัสน.ศ.6210110266 section01

# Start making the component
เริ่มต้นจากการสร้าง component ของ Board 
และ square สำหรับ ตัวละครอื่นๆ

Player ที่เป็นblock square และมีการตอบสนองต่อ ปุ่มบังคับบนคีย์บอร์ด

สร้าง Enemy และ Gameinfo ที่ประกอบไปด้วย เวลา สกอร์ ของผู้เล่น และ High score

# Game

สร้าง Game ที่ใช้คีย์บอดร์ด ลูกศร ในการบังคับ block Player เพื่อลบ Enemy ที่เข้ามาในBoard แบบสุ่ม โดยมีการแสดงเวลา และคะแนนที่หลบได้ทุกๆ10แต้มต่อครั้ง เมื่อชนเข้ากับblock enemy จะresetตำแหน่งให้กลับไปอยู่ที่เดิม 