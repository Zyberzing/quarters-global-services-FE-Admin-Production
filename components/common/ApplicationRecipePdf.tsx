import { formatCurrency } from '@/lib/formatCurrency';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#111',
  },

  /* HEADER */
  header: {
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: '1px solid gray',
  },
  logo: {
    width: 120,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  /* COMPANY INFO */
  companyBlock: {
    marginTop: 12,
    marginBottom: 14,
  },
  companyName: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 12,
  },
  companyText: {
    fontSize: 9,
    color: '#444',
    marginBottom: 2,
  },

  /* SECTIONS */
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    backgroundColor: '#f1f1f1',
    padding: 6,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  /* ROWS */
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    width: '60%',
    color: '#333',
  },

  /* FOOTER */
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0b2c4d',
    padding: 10,
    textAlign: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 9,
  },
});

type Props = {
  data: any;
};

export const ApplicationRecipePdf = ({ data }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image src="/logo-text-2.png" style={styles.logo} />
          <Text style={styles.title}>PAYMENT RECEIPT</Text>
        </View>

        {/* COMPANY INFO */}
        <View style={styles.companyBlock}>
          <Text style={styles.companyName}>Quartus Global Services</Text>
          <Text style={styles.companyText}>2427 FM 1092 Rd, Unit A</Text>
          <Text style={styles.companyText}>Missouri City, TX 77459, USA</Text>
          <Text style={styles.companyText}>info@quartusglobalservices.com</Text>
        </View>

        {/* PERSONAL INFO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>
              {data.firstName} {data.lastName}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{data.phone}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>From Country</Text>
            <Text style={styles.value}>{data.fromCountryId?.name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>To Country</Text>
            <Text style={styles.value}>{data.toCountryId?.name}</Text>
          </View>
        </View>

        {/* APPLICATION DETAILS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Application Details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Application ID</Text>
            <Text style={styles.value}>{data.id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Service</Text>
            <Text style={styles.value}>
              {data.serviceFields?.applicationServiceDetails?.service}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Service Category</Text>
            <Text style={styles.value}>
              {data.serviceFields?.applicationServiceDetails?.serviceCategory}
            </Text>
          </View>

          {data.serviceFields?.applicationServiceDetails?.serviceSubCategory && (
            <View style={styles.row}>
              <Text style={styles.label}>Service Sub Category</Text>
              <Text style={styles.value}>
                {data.serviceFields?.applicationServiceDetails?.serviceSubCategory}
              </Text>
            </View>
          )}

          <View style={styles.row}>
            <Text style={styles.label}>Service Package</Text>
            <Text style={styles.value}>
              {data.serviceFields?.applicationServiceDetails?.servicePackage}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Service Addons</Text>
            <Text style={styles.value}>
              {data.serviceFields?.applicationServiceDetails?.serviceAddons}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>{data.status}</Text>
          </View>
        </View>

        {/* PAYMENT INFO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Information</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Payment Method</Text>
            <Text style={styles.value}>{data.serviceFields?.paymentMethod}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payment Status</Text>
            <Text style={styles.value}>{data.serviceFields?.paymentStatus}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Total Amount</Text>
            <Text style={styles.value}>
              {formatCurrency({ amount: data.serviceFields?.totalAmount || 0 })}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.value}>
              {formatCurrency({ amount: data.serviceFields?.discount || 0 })}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Amount To Be Paid</Text>
            <Text style={styles.value}>
              {formatCurrency({ amount: data.serviceFields?.amountToBePaid || 0 })}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Paid Amount</Text>
            <Text style={styles.value}>
              {formatCurrency({ amount: data.serviceFields?.paidAmount || 0 })}
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Quartus Global Services · Missouri City, TX · USA</Text>
        </View>
      </Page>
    </Document>
  );
};
