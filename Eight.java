public class Eight {
    public static void main(String[] args) {
      Bike bike = new Bike();
      bike.accelerate();
      bike.accelerate();
    }
  }
    abstract class Vehicle{
      protected double speed = 5;
      protected double maxSpeed = 20;
      public Vehicle(double speed, double maxSpeed) {
        this.speed = speed;
        this.maxSpeed = maxSpeed;
      }
      public boolean accelerate() {
        if(speed < maxSpeed) {
          speed++;
          return true;
        }
        return false;
      }
      public boolean decelerate() {
        speed --;
        return true;
      }
      
    }
    class Bike extends Vehicle{
      public Bike() {
        super(5,20);
      
      System.out.printf("Speed: %f, Max speed: %f",speed,maxSpeed);
    }}