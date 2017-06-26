// Traditional Chinese 繁體中文 - zh-tw.js
'use strict';
var zhtw = function() {}
zhtw.code = 'zhtw';
zhtw.data = {

/* Navigation*/
NAV_AddWallet               : '新增錢包 ',
NAV_BulkGenerate            : '批量產生 ',
NAV_Contact                 : '聯繫我們 ',
NAV_Contracts               : '合約 ',
NAV_DeployContract          : '部署合約 ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : '產生錢包 ',
NAV_Help                    : '幫助 ',
NAV_InteractContract        : '和合約互動 ',
NAV_Multisig                : '多重簽署 ',
NAV_MyWallets               : '我的錢包 ',
NAV_Offline                 : '離線發送 ',
NAV_SendEther               : '發送乙太幣 / 代幣 ',
NAV_SendTokens              : '發送代幣 ',
NAV_SignMsg                 : '對訊息做簽名 ',
NAV_Swap                    : 'Swap ',
NAV_ViewWallet              : '查看錢包 ',
NAV_YourWallets             : '你的錢包 ',

/* General */
x_Access                    : '存取合約 ',
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. 你可以把地址當作是你的"帳號"或者"公鑰"。將地址告訴他人，他人就能發送乙太幣給你。這個圖標能幫助你判別地址。 ',
x_Address                   : '你的地址 ',
x_Cancel                    : '取消 ',
x_CSV                       : 'CSV 檔 (未加密) ',
x_Download                  : '下載 ',
x_Json                      : 'JSON 檔 (未加密) ',
x_JsonDesc                  : '這是未加密的JSON格式私鑰檔。這表示你不需要密碼就可以控制錢包，但任何持有此JSON文件的人也都無須密碼便能控制你的錢包和乙太幣。 ',
x_Keystore                  : 'Keystore 檔 (UTC / JSON · 推薦 · 經過加密) ',
x_Keystore2                 : 'Keystore 檔 (UTC / JSON) ',
x_KeystoreDesc              : '此Keystore檔和Mist錢包相容，因此你可以輕鬆地匯入錢包。我們推薦你下載並備份此檔案。 ',
x_Mnemonic                  : '助憶口令 ',
x_ParityPhrase              : 'Parity口令 ',
x_Password                  : '密碼 ',
x_Print                     : '列印紙錢包 ',
x_PrintDesc                 : '小技巧: 按下列印並保存為PDF檔，儘管你沒有印表機！ ',
x_PrintShort                : '列印 ',
x_PrivKey                   : '私鑰 (未加密) ',
x_PrivKey2                  : '私鑰 ',
x_PrivKeyDesc               : '這是你未加密的私鑰，這表示你不需要密碼就可以控制錢包。如果有人取得此私鑰，他們也無須密碼便能可以控制你的錢包。因此，我們推薦加密過的私鑰檔。 ',
x_Save                      : '保存 ',
x_TXT                       : 'TXT 檔 (未加密) ',
x_Wallet                    : '錢包 ',

/* Header */
CX_Tagline                  : '開源的JavaScript客戶端乙太錢包Chrome擴充功能 ',
CX_Warning_1                : '確保你存在這裡的所有錢包皆有**額外的備份**。導致此擴充功能資料喪失的可能很多，這包括移除和重新安裝此擴充功能。此擴充功能讓你輕鬆操作錢包，而**不是**備份錢包。 ',
MEW_Tagline                 : '開源的JavaScript客戶端乙太錢包 ',
MEW_Warning_1               : '每次存取和產生錢包時都要檢查上方的網址。小心釣魚網站！ ',

/* Footer */
FOOTER_1                    : '讓你輕鬆、安全地和乙太坊互動的開源客戶端工具。 ',
FOOTER_1b                   : '開發者 ',
FOOTER_2                    : '歡迎捐贈給我們 ',
FOOTER_3                    : 'Client-side wallet generation by ',
FOOTER_4                    : '免責聲明 ',

/* Sidebar */
sidebar_AccountInfo         : '帳戶資訊 ',
sidebar_AccountAddr         : '帳戶地址 ',
sidebar_AccountBal          : '帳戶餘額 ',
sidebar_TokenBal            : '代幣餘額 ',
sidebar_Equiv               : '價值 ',
sidebar_TransHistory        : '交易歷史 ',
sidebar_donation            : 'MyEtherWallet是注重你的隱私和安全的免費、開源服務。如果有更多捐贈，我們就能花更多時間開發新功能、聽取你的建議並且滿足你的需要。我們只是兩個想要改變世界的人。幫助我們？ ',
sidebar_donate              : '捐贈 ',
sidebar_thanks              : '謝謝你!!! ',

/* Decrypt Panel */
decrypt_Access              : '你想要如何存取你的錢包？ ',
decrypt_Title               : '選擇你的私鑰格式 ',
decrypt_Select              : '選擇一個錢包 ',

/* Mnemonic */
MNEM_1                      : '選擇你要互動的地址。 ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : '更多地址 ',
MNEM_prev                   : '之前的地址 ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S 錢包',
ADD_Ledger_1                : '連接至你的 Ledger Nano S ',
ADD_Ledger_2                : '開啟基於以太坊開發的應用程式（或一個寫成合約的應用程式） ',
ADD_Ledger_3                : '確認已經開啟設定選項中的瀏覽器支援選項',
ADD_Ledger_4                : '如果在設定選項中找不到瀏覽器支援選項，請確認你的韌體版本新於[1.2版](https://www.ledgerwallet.com/apps/manager)',
ADD_Ledger_0b               : '以 [Chrome](https://www.google.com/chrome/browser/desktop/) 或 [Opera](https://www.opera.com/) 瀏覽器重新開啟MyEtherWallet',
ADD_Ledger_scan             : '連接至 Ledger Nano S ',
x_Trezor                    : 'TREZOR 錢包 ',
ADD_Trezor_scan             : '連接至 TREZOR ',

/* Add Wallet */
ADD_Label_1                 : '你想要做什麼？ ',
ADD_Radio_1                 : '產生新錢包 ',
ADD_Radio_2                 : '選擇你的錢包檔 (Keystore / JSON) ',
ADD_Radio_2_alt             : '選擇你的錢包檔 ',
ADD_Radio_2_short           : '選擇錢包檔... ',
ADD_Radio_3                 : '貼上/輸入 你的私鑰 ',
ADD_Radio_4                 : '監視一個帳戶 ',
ADD_Radio_5                 : '貼上/輸入 你的助憶口令 ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_PathCustom      : 'Custom',
ADD_Label_2                 : '新增一個暱稱 ',
ADD_Label_3                 : '你的錢包經過加密。請輸入密碼。 ',
ADD_Label_4                 : '監視一個帳戶 ',
ADD_Warning_1               : '你可以在錢包頁面監視任何帳戶，而且不需要匯入該帳戶的私鑰。這並不表示你能存取該帳戶或透過該帳戶傳送乙太幣。 ',
ADD_Label_5                 : '輸入地址 ',
ADD_Label_6                 : '解鎖你的錢包 ',
ADD_Label_6_short           : '解鎖 ',
ADD_Label_7                 : '新增帳戶 ',

/* My Wallet */
MYWAL_Nick                  : '錢包暱稱 ',
MYWAL_Address               : '錢包地址 ',
MYWAL_Bal                   : '餘額 ',
MYWAL_Edit                  : '編輯 ',
MYWAL_View                  : '檢視 ',
MYWAL_Remove                : '移除 ',
MYWAL_RemoveWal             : '移除錢包 ',
MYWAL_WatchOnly             : '你正在監視的錢包 ',
MYWAL_Viewing               : '查看錢包 ',
MYWAL_Hide                  : '隱藏錢包資訊 ',
MYWAL_Edit_2                : '編輯錢包 ',
MYWAL_Name                  : '錢包名字 ',
MYWAL_Content_1             : '警告！ 你即將移除你的錢包 ',
MYWAL_Content_2             : '確保你在移除錢包前，已經**保存了私鑰和Keystore檔，並記住了密碼**。 ',
MYWAL_Content_3             : '如果你在未來還想在MyEtherWallet擴充功能上操作此錢包，你必須使用私鑰或JSON檔和密碼來重新新增它。 ',

/* Generate Wallets */
GEN_desc                    : '你可以在這裡新增多個錢包 ',
GEN_Label_1                 : '輸入一個夠安全的密碼（至少九個字元） ',
GEN_Placeholder_1           : '別忘記將密碼記下！ ',
GEN_SuccessMsg              : '成功！ 你的錢包已被產生。 ',
GEN_Label_2                 : '存下你的Keystore檔。 別忘記上方的密碼。 ',
GEN_Label_3                 : '記下你的地址。 ',
GEN_Label_4                 : '印出你的紙錢包，或存下QR碼版本的資料。（可選的） ',

/* Bulk Generate Wallets */
BULK_Label_1                : '要產生的錢包數量 ',
BULK_Label_2                : '產生多個錢包 ',
BULK_SuccessMsg             : '成功！ 你的所有錢包皆已被產生。 ',

/* Sending Ether and Tokens */
SEND_addr                   : '給地址 ',
SEND_amount                 : '要發送的數量 ',
SEND_amount_short           : '數量 ',
SEND_custom                 : '新增其他代幣 ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : '送出所有餘額 ',
SEND_generate               : '產生交易訊息 ',
SEND_raw                    : '交易訊息 ',
SEND_signed                 : '已簽署的交易訊息 ',
SEND_trans                  : '送出交易 ',
SENDModal_Title             : '注意！ ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : '你將要送出 ',
SENDModal_Content_2         : '到 ',
SENDModal_Content_3         : '確定要繼續嗎？ ',
SENDModal_Content_4         : '提醒：如果你遇到了問題，解決方法通常是傳入乙太幣到帳戶中來支付交易所需的gas。Gas由乙太幣支付。 ',
SENDModal_No                : '不，帶我離開這裡！ ',
SENDModal_Yes               : '好，我確定！進行交易。 ',

/* Tokens */
TOKEN_Addr                  : '地址 ',
TOKEN_Symbol                : '代幣縮寫 ',
TOKEN_Dec                   : '小數點 ',
TOKEN_show                  : '顯示所有代幣 ',
TOKEN_hide                  : '隱藏代幣 ',

/* Send Transaction */
TRANS_desc                  : '如果你是要傳送代幣(Token)，請使用“傳送代幣”功能',
TRANS_warning               : '"Only ETH" 或 "Only ETC" 功能是透過一個合約來傳送，並非單純的轉錢。有些服務可能沒辦法接受這兩種功能。 了解更多。Functions you are sending via a contract. Some services have issues accepting these transactions. Read more. ',
TRANS_advanced              : '進階功能：為交易新增Data',
TRANS_data                  : '交易的Data ',
TRANS_gas                   : 'Gas 總量 ',
TRANS_sendInfo              : '我們使用比平均手續費略高的gas價格（每單位0.000000021 ETH）確保交易能快速被確認。我們並不收取任何手續費。',

/* Offline Transaction */
OFFLINE_Title               : '以離線的方式製作交易',
OFFLINE_Desc                : '離線製作交易的方式包含三步驟。步驟一及三需要使用連網裝置，步驟二則使用離線的電腦以確保你的私鑰不會被連網裝置存取。',
OFFLLINE_Step1_Title        : '步驟一： 產生交易相關訊息（在連網裝置上） ',
OFFLINE_Step1_Button        : '產生交易相關訊息 ',
OFFLINE_Step1_Label_1       : '交易發起方的地址 ',
OFFLINE_Step1_Label_2       : '注意： 這是交易發起方的地址，不是交易接受方的地址。Nonce值是看交易發起方來決定。如果是使用離線裝置，則這個地址是離線儲存裝置的帳號地址。 ',
OFFLINE_Step2_Title         : '步驟二： 製作交易（在離線裝置上） ',
OFFLINE_Step2_Label_1       : '交易接收方的地址 ',
OFFLINE_Step2_Label_2       : '送給交易接收方的金額',
OFFLINE_Step2_Label_3       : '每單位gas的費用',
OFFLINE_Step2_Label_3b      : '這會顯示於你步驟一連網裝置上。',
OFFLINE_Step2_Label_4       : 'Gas 總量 ',
OFFLINE_Step2_Label_4b      : '21000 是預設的gas總量（單純轉錢）。如果你是要執行合約，則會不一樣。多給的gas如果沒有用完會退還給你。',
OFFLINE_Step2_Label_5b      : '這會顯示於你步驟一連網裝置上。',
OFFLINE_Step2_Label_6       : '交易的Data ',
OFFLINE_Step2_Label_6b      : '並非必需的，Data通常只有在你執行合約的時候才需要。 ',
OFFLINE_Step2_Label_7       : '輸入/選擇 你的私鑰/JSON檔。 ',
OFFLINE_Step3_Title         : '步驟三： 送出交易（在連網裝置上） ',
OFFLINE_Step3_Label_1       : '將步驟二經過簽名的交易複製並貼上到這，最後按下送出交易的按鈕。',

/* Contracts */
CONTRACT_Title              : '合約地址 ',
CONTRACT_Title_2            : '選擇已經存在的合約 ',
CONTRACT_Json               : '合約的 ABI / JSON 介面 ',
CONTRACT_Interact_Title     : '讀取/寫入 合約',
CONTRACT_Interact_CTA       : '選擇一個動作',
CONTRACT_ByteCode           : '合約的程式碼 ',
CONTRACT_Read               : '讀取 ',
CONTRACT_Write              : '寫入 ',
DEP_generate                : '產生程式碼 ',
DEP_generated               : '已產生的程式碼 ',
DEP_signtx                  : '對交易做簽名 ',
DEP_interface               : '已產生的合約介面 ',

/* Node Switcher */
NODE_Title                  : '設定你的客製節點',
NODE_Subtitle               : '連線至一個區域/私人節點...',
NODE_Warning                : '你的節點必須使用HTTPS安全連線的方式才能夠由MyEtherWallet.com連接到它。 你可以下載[MyEtherWallet repo](https://github.com/kvhnuke/etherwallet/releases/latest)並建立起一個你的節點來連接至其他的節點。或著從[LetsEncrypt](https://letsencrypt.org/)獲取免費的SSL憑證',
NODE_Name                   : '節點名稱',
NODE_Port                   : '節點連線的端口號碼',
NODE_CTA                    : '儲存設定並使用客製節點',

/* Swap / Exchange */
SWAP_rates                  : "當前的匯率 ",
SWAP_init_1                 : "我想要用我的 ",
SWAP_init_2                 : " 換 ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "下一步 ", // or "Continue"
SWAP_information            : "你的相關資料 ",
SWAP_send_amt               : "送出多少金額 ",
SWAP_rec_amt                : "收入多少金額 ",
SWAP_your_rate              : "你的匯率 ",
SWAP_rec_add                : "你收錢的地址 ",
SWAP_start_CTA              : "開始交換 ",
SWAP_ref_num                : "你的交易編號 ",
SWAP_time                   : "剩餘多少時間可送出交易 ",
SWAP_elapsed                : "送出交易後已經經過了 ",
SWAP_progress_1             : "訂單已產生 ",
SWAP_progress_2             : "正在等待你的 ", // Waiting for your BTC...
SWAP_progress_3             : "收到了! ", // ETH Received!
SWAP_progress_4             : "正在傳送你的 {{orderResult.output.currency}} ",
SWAP_progress_5             : "訂單完成 ",
SWAP_order_CTA              : "請傳送 ", // Please send 1 ETH...
SWAP_unlock                 : "解鎖你的錢包來從這個頁面轉錢或轉代幣 ",

/* Sign Message */
MSG_message                 : '訊息 ',
MSG_date                    : '日期 ',
MSG_signature               : '簽名 ',
MSG_verify                  : '驗證訊息 ',
MSG_info1                   : '填入當前時間來避免簽名在其他不同時間被重複利用。 ',
MSG_info2                   : '填入你的暱稱及你使用該暱稱的場合來避免其他人使用',
MSG_info3                   : '填入這個訊息的源由來避免被用在其他目的。 ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : '這可以讓你下載不同版本的私鑰並且重新印製出你的紙錢包。你可能會需要這個功能來將你的帳戶[讀入Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)。 如果你想要檢查你的帳號餘額，我們建議你使用區塊鏈瀏覽網頁像是[etherscan.io](http://etherscan.io/)。 ',
VIEWWALLET_Subtitle_Short   : '這可以讓你下載不同版本的私鑰並且重新印製出你的紙錢包。 ',
VIEWWALLET_SuccessMsg       : '成功！這些是你的錢包內容。 ',

/* Chrome Extension */
CX_error_1                  : '你沒有儲存過任何錢包。 點擊["新增錢包"](/cx-wallet.html#add-wallet)來新增一個錢包！ ',
CX_quicksend                : '傳送 ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : '請輸入有效的數量。 ',
ERROR_1                     : '你的密碼至少需要9個字元。請確保你的密碼強度夠強。 ',
ERROR_2                     : '抱歉，我們無法識別這個錢包檔案。 ',
ERROR_3                     : '這不是一個有效的錢包檔案。 ',
ERROR_4                     : '這個單位並不存在，請使用以下的單位 ',
ERROR_5                     : '無效的地址。 ',
ERROR_6                     : '無效的密碼。 ',
ERROR_7                     : '無效的數量。(Must be integer. Try 0-18.) ', // 7
ERROR_8                     : '無效的gas上限。(Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : '無效的data。(Must be hex.) ', // 9
ERROR_10                    : '無效的gas數量。(Must be integer. Try 20 GWEI / 20000000000 WEI.)',
ERROR_11                    : '無效的nonce值。(Must be integer.)', // 11
ERROR_12                    : '無效的已簽名交易。 ',
ERROR_13                    : '已經有一個使用相同暱稱的錢包存在。 ',
ERROR_14                    : '找不到錢包。 ',
ERROR_15                    : 'It doesn\'t look like a proposal with this ID exists yet or there is an error reading this proposal. ',
ERROR_16                    : '儲存裝置中已經有一個包含這個地址的錢包存在。 請見錢包頁面。 ',
ERROR_17                    : '你帳戶中必須有至少 **0.01 ETH** 來支付gas的成本。 請添加一些 ETH 並重試。 ',
ERROR_18                    : 'All gas would be used on this transaction. This means you have already voted on this proposal or the debate period has ended.', // 18
ERROR_19                    : '無效的符號 ',
ERROR_20                    : '並不是一個有效的 ERC-20 代幣 ',
ERROR_21                    : '無法估計花費的gas。 這個帳戶沒有足夠餘額，或是接收的合約丟出錯誤訊息。 你可以自己手動設定gas並執行。 傳送後的錯誤訊息可能會提供更多訊息。 ',
ERROR_22                    : '請輸入有效的節點名稱',
ERROR_23                    : '輸入有效的url，如果你使用https請確保url也是使用https。 ',
ERROR_24                    : '請輸入有效的連線端口號碼 ',
ERROR_25                    : '請輸入有效的鏈ID',
ERROR_26                    : '請輸入有效的ABI ',
ERROR_27                    : '最少數量 0.01 及最大',
ERROR_28                    : '**以後你會需要密碼和Keystore檔案** (或私鑰)來存取你的錢包。請儲存並備份在額外的地方！如果沒有儲存你是沒有機會找回這個錢包的。 詳見[幫助頁面](https://www.myetherwallet.com/#help)來獲取更多資訊。 ',
ERROR_29                    : '請輸入有效的使用者及密碼 ',
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : '有效的地址 ',
SUCCESS_2                   : '成功解密錢包 ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:  ', //'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //
SUCCESS_4                   : '成功新增你的錢包 ',
SUCCESS_5                   : '已選擇檔案 ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
WARN_Send_Link              : '你藉由一條連結到達此頁面，且該連結已幫你將地址、金額、gas和data欄位或交易類別(傳送模式)填好。 送出前你可以自由更改其中的值。 首先先解鎖你的錢包。 ',

/* Geth Error Messages */
GETH_InvalidSender          : '無效的傳送者 ',
GETH_Nonce                  : 'Nonce值太低 ',
GETH_Cheap                  : 'Gas價格太低以致不會被礦工接受 ',
GETH_Balance                : '餘額不足 ',
GETH_NonExistentAccount     : '帳戶不存在或是帳戶餘額不足 ',
GETH_InsufficientFunds      : '提供的金額不足以支付gas成本的錢加上你要轉的錢 ',
GETH_IntrinsicGas           : '提供的gas量不足 ',
GETH_GasLimit               : 'gas量超過每單位區塊的gas上限 ',
GETH_NegativeValue          : '負數的值 ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "已經有輸入一筆有同樣雜湊值的交易了。",
PARITY_Old                  : "交易的nonce值太低。請增加nonce值。",
PARITY_TooCheapToReplace    : "交易手續費太低。已經有另外一筆有同樣nonce值的交易被加入排程。 請增加交易費用來取代該筆交易或增加nonce值來接續在該筆交易之後。",
PARITY_LimitReached         : "目前排程中有太多交易。你的交易因為超過排程容量上限而被拒絕。請增加交易手續費。",
PARITY_InsufficientGasPrice : "交易手續費太低。達不到你節點所要求的最低手續費(最低: {}, 收到: {}). 請增加交易手續費。",
PARITY_InsufficientBalance  : "提供金額不足。你嘗試送出交易的帳戶並沒有足夠的金額。 需要 {} wei 但只有: {} wei.",
PARITY_GasLimitExceeded     : "交易提供的gas量超過每單位的區塊gas上限 上限: {}, 收到: {}. 請減少提供的gas量。",
PARITY_InvalidGasLimit      : "提供的gas量超過上限。",

/* Tranlsation Info */
translate_version           : '0.5 ',
Translator_Desc             : '譯者: ',
TranslatorName_1            : 'Dymnz ',
TranslatorAddr_1            : '0x0065F744bCb5393aA538cfb0688CBb0Ae0bFa741 ',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : 'NIC',
TranslatorAddr_2            : ' ',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : ' ',
TranslatorAddr_3            : ' ',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : ' ',
TranslatorAddr_4            : ' ',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : ' ',
TranslatorAddr_5            : ' ',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'If you created a wallet -or- downloaded the repo before **Dec. 31st, 2015**, please check your wallets &amp; download a new version of the repo. Click for details. ',
HELP_Desc                   : 'Do you see something missing? Have another question? [Get in touch with us](mailto:support@myetherwallet.com), and we will not only answer your question, we will update this page to be more useful to people in the future! ',
HELP_Remind_Title           : 'Some reminders ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, and some of the underlying Javascript libraries we use are under active development.** While we have thoroughly tested & tens of thousands of wallets have been successfully created by people all over the globe, there is always the remote possibility that something unexpected happens that causes your ETH to be lost. Please do not invest more than you are willing to lose, and please be careful. If something were to happen, we are sorry, but **we are not responsible for the lost Ether**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX are not "web wallets". You do not create an account or give us your Ether to hold onto. All data never leaves your computer/your browser. We make it easy for you to create, save, and access your information and interact with the blockchain. ',
HELP_Remind_Desc_3          : 'If you do not save your private key & password, there is no way to recover access to your wallet or the funds it holds.  Back them up in multiple physical locations &ndash; not just on your computer! ',

HELP_0_Title                : '0) I\'m new. What do I do? ',
HELP_0_Desc_1               : 'MyEtherWallet gives you the ability to generate new wallets so you can store your Ether yourself, not on an exchange. This process happens entirely on your computer, not our servers. Therefore, when you generate a new wallet, **you are responsible for safely backing it up**. ',
HELP_0_Desc_2               : 'Create a new wallet. ',
HELP_0_Desc_3               : 'Back the wallet up. ',
HELP_0_Desc_4               : 'Verify you have access to this new wallet and have correctly saved all necessary information. ',
HELP_0_Desc_5               : 'Transfer Ether to this new wallet. ',

HELP_1_Title                : '1) How do I create a new wallet? ',
HELP_1_Desc_1               : 'Go to the "Generate Wallet" page. ',
HELP_1_Desc_2               : 'Go to the "Add Wallet" page & select "Generate New Wallet" ',
HELP_1_Desc_3               : 'Enter a strong password. If you think you may forget it, save it somewhere safe. You will need this password to send transactions. ',
HELP_1_Desc_4               : 'Click "GENERATE". ',
HELP_1_Desc_5               : 'Your wallet has now been generated. ',

HELP_2a_Title               : 'How do I save/backup my wallet? ',
HELP_2a_Desc_1              : 'You should always back up your wallet externally and in multiple physical locations - like on a USB drive and/or a piece of paper. ',
HELP_2a_Desc_2              : 'Save the address. You can keep it to yourself or share it with others. That way, others can transfer ether to you. ',
HELP_2a_Desc_3              : 'Save versions of the private key. Do not share it with anyone else. Your private key is necessary when you want to access your Ether to send it! There are 3 types of private keys ',
HELP_2a_Desc_4              : 'Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive. ',
HELP_2a_Desc_5              : 'Print the wallet if you have a printer. Otherwise, write down your private key and address on a piece of paper. Store this as a secure location, separate from your computer and the USB drive. ',
HELP_2a_Desc_6              : 'Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood). ',

HELP_2b_Title               : '2b) How do I safely / offline / cold storage with MyEtherWallet? ',
HELP_2b_Desc_1              : 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Click on `dist-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Move zip to an airgapped computer. ',
HELP_2b_Desc_4              : 'Unzip it and double-click `index.html`. ',
HELP_2b_Desc_5              : 'Generate a wallet with a strong password. ',
HELP_2b_Desc_6              : 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. ',
HELP_2b_Desc_7              : 'Store these papers / USBs in multiple physically separate locations. ',
HELP_2b_Desc_8              : 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

HELP_3_Title                : '3) How do I verify I have access to my new wallet? ',
HELP_3_Desc_1               : '**Before you send any Ether to your new wallet**, you should ensure you have access to it. ',
HELP_3_Desc_2               : 'Navigate to the "View Wallet Info" page. ',
HELP_3_Desc_3               : 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
HELP_3_Desc_4               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_3_Desc_5               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_3_Desc_6               : 'Click the "Unlock Wallet" button. ',
HELP_3_Desc_7               : 'Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

HELP_4_Title                : '4) How do I send Ether from one wallet to another? ',
HELP_4_Desc_1               : 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ',
HELP_4_Desc_2               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_4_Desc_3               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_4_Desc_4               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_4_Desc_5               : 'Click the "Unlock Wallet" button. ',
HELP_4_Desc_6               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4_Desc_7               : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4_Desc_9               : 'Click "Generate Transaction". ',
HELP_4_Desc_10              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_4_Desc_11              : 'Click the blue "Send Transaction" button below that. ',
HELP_4_Desc_12              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_4_Desc_13              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_4CX_Title              : '4) How do I send Ether using MyEtherWallet CX? ',
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Send Ether & Tokens" page. ',
HELP_4CX_Desc_2             : 'QuickSend ',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon. ',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button. ',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from. ',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4CX_Desc_8             : 'Click "Send Transaction". ',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct. ',
HELP_4CX_Desc_10            : 'Enter the password for that wallet. ',
HELP_4CX_Desc_11            : 'Click "Send Transaction." ',
HELP_4CX_Desc_12            : 'Using "Send Ether & Tokens" Page ',

HELP_5_Title                : '5) How do I run MyEtherWallet.com offline/locally? ',
HELP_5_Desc_1               : 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
HELP_5_Desc_7               : 'MyEtherWallet.com is now running entirely on your computer. ',
HELP_5_Desc_8               : 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ',
HELP_5_Desc_9               : 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ',

HELP_5CX_Title              : '5) How can I install this extension from the repo instead of the Chrome Store? ',
HELP_5CX_Desc_2             : 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ',
HELP_5CX_Desc_3             : 'Go to Google Chrome and find you settings (in the menu in the upper right). ',
HELP_5CX_Desc_4             : 'Click "Extensions" on the left. ',
HELP_5CX_Desc_5             : 'Check the "Developer Mode" button at the top of that page. ',
HELP_5CX_Desc_6             : 'Click the "Load unpacked extension..." button. ',
HELP_5CX_Desc_7             : 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
HELP_5CX_Desc_8             : 'The extension should now show up in your extensions and in your Chrome Extension bar. ',

HELP_7_Title                : '7) How do I send tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Send Ether & Tokens" page. ',
HELP_7_Desc_2               : 'Unlock your wallet. ',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_7_Desc_4               : 'Enter the amount you would like to send. ',
HELP_7_Desc_5               : 'Select which token you would like to send. ',
HELP_7_Desc_6               : 'If you do not see the token listed ',
HELP_7_Desc_7               : 'Click "Custom". ',
HELP_7_Desc_8               : 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
HELP_7_Desc_9               : 'Click "Save". ',
HELP_7_Desc_10              : 'You can now send that token as well as see it\'s balance in the sidebar. ',
HELP_7_Desc_11              : 'Click "Generate Transaction". ',
HELP_7_Desc_12              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_7_Desc_13              : 'Click the blue "Send Transaction" button below that. ',
HELP_7_Desc_14              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_7_Desc_15              : 'The transaction will be submitted. The TX Hash will display. You can click that TX Hash to see it on the blockchain. ',

HELP_8_Title                : '8) What happens if your site goes down? ',
HELP_8_Desc_1               : 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ',
HELP_8_Desc_2               : 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. ',
HELP_8_Desc_3               : 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ',
HELP_8_Desc_4               : 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ',

HELP_8CX_Title              : '8) What happens if MyEtherWallet CX disappears? ',
HELP_8CX_Desc_1             : 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. ',
HELP_8CX_Desc_2             : 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ',
HELP_8CX_Desc_3             : 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ',

HELP_9_Title                : '9) Is the "Send Ether & Tokens" page offline? ',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

HELP_10_Title               : '10) How do I make an offline transaction? ',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer. ',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ',
HELP_10_Desc_8              : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_10_Desc_9              : 'Press the "GENERATE SIGNED TRANSACTION" button. ',
HELP_10_Desc_10             : 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ',
HELP_10_Desc_11             : 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ',

HELP_12_Title               : '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ',
HELP_12_Desc_1              : 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Go to the "View Wallet Info" page. ',
HELP_12_Desc_3              : 'Unlock your wallet using your **encrypted** private key or JSON file. ',
HELP_12_Desc_4              : 'Go to the "My Wallets" page. ',
HELP_12_Desc_5              : 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
HELP_12_Desc_6              : 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
HELP_12_Desc_7              : 'Open the Ethereum Wallet application. ',
HELP_12_Desc_8              : 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ',
HELP_12_Desc_10             : 'Your account should show up immediately under "Accounts." ',
HELP_12_Desc_11             : 'Using your unencrypted private key... ',
HELP_12_Desc_12             : 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
HELP_12_Desc_13             : 'Select your wallet file -or- enter/paste your private key to unlock your wallet. ',
HELP_12_Desc_14             : 'Copy Your Private Key (unencrypted). ',
HELP_12_Desc_15             : 'If you are on a Mac ',
HELP_12_Desc_15b            : 'If you are on a PC ',
HELP_12_Desc_16             : 'Open Text Edit and paste this private key. ',
HELP_12_Desc_17             : 'Go to the menu bar and click "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
HELP_12_Desc_19             : 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_21             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
HELP_12_Desc_23             : 'Open Notepad & paste the private key ',
HELP_12_Desc_24             : 'Save the file as `nothing_special_delete_me.txt` at `C:` ',
HELP_12_Desc_25             : 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_27             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

HELP_14_Title               : '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? ',
HELP_14_Desc_1              : 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ',

HELP_16_Title               : '16) How do I check the balance of my account? ',
HELP_16_Desc_1              : 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ',

HELP_17_Title               : '17) Why isn\'t my balance showing up when I unlock my wallet? ',
HELP_17_Desc_1              : ' This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

HELP_18_Title               : '18) Where is my geth wallet file? ',

HELP_19_Title               : '19) Where is my Mist wallet file? ',
HELP_19_Desc_1              : 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

HELP_20_Title               : '20) Where is my pre-sale wallet file? ',
HELP_20_Desc_1              : 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

HELP_21_Title               : '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? ',
HELP_21_Desc_1              : 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ',
HELP_21_Desc_2              : 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ',
HELP_21_Desc_3              : 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ',
HELP_21_Desc_4              : 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ',
HELP_21_Desc_5              : 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
HELP_21_Desc_6              : 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ',
HELP_21_Desc_7              : '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ',
HELP_21_Desc_8              : 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

HELP_SecCX_Title            : 'Security - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Where is this extension saving my information? ',
HELP_SecCX_Desc_2           : 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ',
HELP_SecCX_Desc_3           : 'What information is saved? ',
HELP_SecCX_Desc_4           : 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ',
HELP_SecCX_Desc_5           : 'Why aren\'t the nickname and wallet address encrypted? ',
HELP_SecCX_Desc_6           : 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ',

HELP_Sec_Title              : 'Security ',
HELP_Sec_Desc_1             : 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
HELP_Sec_Desc_2             : 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
HELP_Sec_Desc_3             : 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
HELP_Sec_Desc_4             : 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

HELP_FAQ_Title              : 'More Helpful Answers to Frequent Questions ',
HELP_Contact_Title          : 'Ways to Get in Touch '
};

module.exports = zhtw;
