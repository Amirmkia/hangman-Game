import multiprocessing
import time
def print_cube():
    i = 0
    while 1 >0 :
        print(i)
        i +=1 
        time.sleep(2)
        
  
def print_square():
    i = 0
    while 1 >0 :
        print(str(i) + "a")
        time.sleep(2)
  
if __name__ == "__main__":
    # creating processes
    p1 = multiprocessing.Process(target=print_square)
    p2 = multiprocessing.Process(target=print_cube)
  
    # starting process 1
    p1.start()
    # starting process 2
    p2.start()
  
    # wait until process 1 is finished
    p1.join()
    # wait until process 2 is finished
    p2.join()