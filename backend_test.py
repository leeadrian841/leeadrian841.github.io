import requests
import sys
from datetime import datetime

class PortfolioAPITester:
    def __init__(self, base_url="https://2fcaa8f6-98bb-47fd-b076-0c91d5c6e15d.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                except:
                    print(f"   Response: {response.text[:100]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.text[:200]}")
                except:
                    print(f"   No response content")

            return success, response.json() if success and response.headers.get('content-type', '').startswith('application/json') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

def main():
    # Setup
    tester = PortfolioAPITester()
    
    print("="*60)
    print("🚀 Adrian Lee Portfolio API Testing")
    print("="*60)

    # Test health endpoint
    success, response = tester.run_test(
        "Health Check",
        "GET",
        "api/health",
        200
    )

    if not success:
        print("\n❌ Health check failed - backend may not be running")
        
    # Print results
    print("\n" + "="*60)
    print(f"📊 Backend API Tests Summary:")
    print(f"   Tests passed: {tester.tests_passed}/{tester.tests_run}")
    if tester.tests_passed == tester.tests_run:
        print("   Status: ✅ All tests passed")
    else:
        print("   Status: ❌ Some tests failed")
    print("="*60)
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())