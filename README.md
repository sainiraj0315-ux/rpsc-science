# RPSC Science App – सिर्फ GitHub

## Upload (मोबाइल से)
1. github.com पर नया repo बनाएँ (Public)।
2. **Add file → Upload files** से `index.html` डालें → Commit।
3. Settings → Pages → Branch **main** → Save।
4. कुछ मिनट बाद ऊपर लिंक दिखेगा: `https://आपका-username.github.io/repo-नाम/`
   **यही लिंक students को दें।** ऐप में **QR** बटन दबाने पर इसी लिंक का QR बनता है।

## पहली बार (Teacher)
ऐप में ऊपर **🔑 Teacher** → नया password डालें → Login।
Teacher panel में फोन, fees, Master code और **Payment QR** (अपने UPI QR का फोटो) लगाएँ।
फिर **💾 data.json Save करें** → फाइल GitHub में Upload (Replace) करें। हर बदलाव के बाद यही करें।

## Students
लिंक या QR से सीधा ऐप खुलता है, ID/password नहीं। Free units खुले रहते हैं।

## Unit Lock
Unit में **🔒 Lock** दबाएँ। हर locked unit का एक Unlock code अपने आप बनता है (**🔑 Code** बटन से बदलें)।
Student Payment QR से Pay करे → आप उसे code दें → वह unit में code डालकर खोलता है (उसी फोन में याद रहता है)।
Master code से सारे locked units एक साथ खुलते हैं।

## Audio सीधा ऐप से upload (GitHub Token, एक बार)
1. GitHub → Profile → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token
2. Name डालें, Expiration चुनें, Repository access → **Only select repositories** → अपना repo
3. Permissions → Repository permissions → **Contents: Read and write** → Generate → Token कॉपी करें
4. अपनी GitHub वाली लिंक पर Teacher login → Teacher panel → Token चिपकाकर **GitHub जोड़ें**
5. अब chapter में **🎙 Audio चुनें** से mp3 चुनें → अपने आप upload और save। 💾 भी सीधा GitHub पर save करेगा।
Token किसी को न दें; यह सिर्फ़ आपके फोन में रहता है।

## Audio हाथ से (Token नहीं तो)
Repo में `audio` folder बनाकर mp3 डालें (फाइल 25 MB तक)। ऐप में chapter के नीचे सिर्फ फाइल का नाम (जैसे `cell1.mp3`) लिखें → 💾 Save → data.json Upload।

## सीमाएँ
- Lock बुनियादी है: GitHub पर सर्वर नहीं होता। Code शेयर हो सकता है और तकनीक जानने वाला data.json या audio का सीधा लिंक खोल सकता है।
- Pay अपने आप नहीं पहचाना जाता, आप खुद देखकर code देते हैं।
