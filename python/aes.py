from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

# Generate a random 128-bit key
key = get_random_bytes(16)

# Create AES cipher object
cipher = AES.new(key, AES.MODE_CBC)

# Encrypt some data
plaintext = b"Hello, this is a secret message."
ciphertext = cipher.encrypt(pad(plaintext, AES.block_size))

# Decrypt the data
decipher = AES.new(key, AES.MODE_CBC, iv=cipher.iv)
decrypted = unpad(decipher.decrypt(ciphertext), AES.block_size)

print(f"Ciphertext: {ciphertext.hex()}")
print(f"Decrypted: {decrypted.decode()}")
